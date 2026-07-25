---
title: Error Handling — trello.js
description: Handle HTTP errors, schema mismatches and network failures from trello.js. Configurable onSchemaMismatch, built-in 429 retry with exponential backoff.
---

# Error Handling

Three classes of failure can surface from a `trello.js` call.

## 1. HTTP errors (non-2xx)

When Trello returns 4xx or 5xx, the client throws a plain `Error`:

```
Request failed: <status> <statusText> - <body>
```

Example:

```ts
try {
  await trello.boards.getBoard({ id: 'does-not-exist' });
} catch (err) {
  if (err instanceof Error && err.message.startsWith('Request failed: 404')) {
    // board not found
  } else {
    throw err;
  }
}
```

The body text is appended to the message when present — it usually contains a human-readable reason from Trello.

## 2. Schema mismatches {#schema-mismatches}

A schema mismatch means the request succeeded and Trello answered with a shape the library does not describe. **By default this does not throw.** The problem is reported once on stderr and the body is handed back unvalidated:

```
[trello.js] GET /boards/{id}/cards answered with something the schema does not describe:
at `0.labels.0.color`, expected enum value, got string. The response is returned unvalidated.
```

This is deliberate. Trello ships new fields and new enum values to its cloud well ahead of the OpenAPI spec that describes it — a label in a shade added after the palette was documented, a `dueReminder` that turned into a number, an `agent` that is now `null`. None of that is your bug, and none of it should end your program.

Choose a different policy with `onSchemaMismatch`:

```ts
const trello = createTrelloClient({ apiKey, apiToken, onSchemaMismatch: 'throw' });
```

| Value | Behaviour |
| --- | --- |
| `'warn'` *(default)* | Report once per distinct problem on stderr, return the body unvalidated. |
| `'silent'` | Return the body unvalidated, say nothing. |
| `'throw'` | Raise [`SchemaMismatchError`](#schemamismatcherror). Use this in a test suite, where a mismatch *is* the thing under test. |
| `(report) => void` | Replace the reporting entirely — route it to your logger, metrics or issue tracker. |

Reporting is deduplicated for the life of the process: one bad field across a 500-card board is one line, not five hundred.

### SchemaMismatchError

```ts
import { SchemaMismatchError } from 'trello.js/core';

try {
  await trello.boards.getBoardCards({ id });
} catch (err) {
  if (err instanceof SchemaMismatchError) {
    console.error(err.report.endpoint); // 'GET /boards/{id}/cards'
    console.error(err.report.issues); // [{ path, expected, received }]
  }
}
```

`report` names field paths and types and **never the values at them** — it is meant to be pasted straight into a bug report without leaking card names, comment text or custom field contents into your logs and error tracker. The underlying `ZodError` is preserved on `err.cause` if you need the raw issues.

A mismatch usually means the Trello spec has drifted from reality. [File an issue](https://github.com/MrRefactoring/trello.js/issues) with the report — it contains everything needed to fix the schema and nothing that belongs to you.

### Routing reports somewhere useful

```ts
const trello = createTrelloClient({
  apiKey,
  apiToken,
  onSchemaMismatch: report => {
    logger.warn({ endpoint: report.endpoint, issues: report.issues }, 'trello schema drift');
  },
});
```

### Turning validation off entirely

`skipParsing: true` is the blunter instrument: it skips schemas altogether, so **no** response is validated and schema transforms stop running too (date fields stay strings rather than `Date` objects). Prefer `onSchemaMismatch`, which only gives up on the responses that actually failed. See [TypeScript & schemas](/guide/typescript).

## 3. Network errors

Anything thrown by `fetch` (DNS failure, connection refused, timeout) bubbles through unchanged — you handle them like any other `fetch` error.

## Automatic 429 retry

Rate-limit responses (`HTTP 429 Too Many Requests`) are retried automatically with exponential backoff: 2 s, 4 s, 8 s, then a final attempt. After four total tries the last 429 is thrown as a normal HTTP error.

You don't need to wrap calls in retry loops. If you find yourself getting 429s a lot, slow down your call rate or use the [batch endpoint](/recipes/boards#batch).

## Pattern: typed handler

```ts
import { SchemaMismatchError } from 'trello.js/core';

async function safeGetBoard(trello, id: string) {
  try {
    return { ok: true, board: await trello.boards.getBoard({ id }) } as const;
  } catch (err) {
    if (err instanceof SchemaMismatchError) return { ok: false, kind: 'schema', report: err.report } as const;
    if (err instanceof Error && err.message.includes('404')) return { ok: false, kind: 'not_found' } as const;
    if (err instanceof Error) return { ok: false, kind: 'http', message: err.message } as const;
    throw err;
  }
}
```

This handler only sees a schema failure when the client is configured with `onSchemaMismatch: 'throw'` — under the default it never fires, because the call succeeds.
