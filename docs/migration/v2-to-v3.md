---
title: Migration v2 → v3 — trello.js
description: What changed in trello.js v3 — schema mismatches no longer throw by default, SchemaMismatchError replaces ZodError, createBatchRun removed.
---

# Migration: v2 → v3

One behavioural change, one new error type, one removed export. If you never catch schema errors, upgrading is a no-op.

## Schema mismatches no longer throw by default

In v2, a response that didn't match its schema raised a `ZodError` and ended the call. In v3 the problem is reported once on stderr and the body is returned unvalidated.

```ts
// v2 — this threw when Trello's shape drifted
const cards = await trello.boards.getBoardCards({ id });

// v3 — this returns the cards, and prints one line to stderr if the shape drifted
const cards = await trello.boards.getBoardCards({ id });
```

**Why.** Every patch release of v2.1 was a schema fix, and two of them ([#42](https://github.com/MrRefactoring/trello.js/issues/42), [#48](https://github.com/MrRefactoring/trello.js/issues/48)) were reported by users whose production integrations stopped working. Trello ships new fields and new enum values to its cloud ahead of the spec that describes them — a label colour from the 2023 palette redesign, a `dueReminder` that became a number, an `agent` that is now `null`. None of that is your bug, and it should not be your outage either.

### Restoring v2 behaviour

```ts
const trello = createTrelloClient({ apiKey, apiToken, onSchemaMismatch: 'throw' });
```

That is the whole migration for anyone who wants the old contract back. The error type differs — see below.

### The other options

| Value | Behaviour |
| --- | --- |
| `'warn'` *(new default)* | Report once per distinct problem on stderr, return the body unvalidated. |
| `'silent'` | Return the body unvalidated, say nothing. |
| `'throw'` | Raise `SchemaMismatchError` — the v2 contract, with a better error. |
| `(report) => void` | Replace the reporting entirely. |

Recommended: leave the default in application code, and set `'throw'` in your test suite, where a mismatch *is* the thing under test.

## `SchemaMismatchError` replaces `ZodError`

Under `onSchemaMismatch: 'throw'`, the thrown error is now `SchemaMismatchError` rather than a raw `ZodError`.

```ts
// v2
import { ZodError } from 'zod';

catch (err) {
  if (err instanceof ZodError) console.error(err.issues);
}

// v3
import { SchemaMismatchError } from 'trello.js/core';

catch (err) {
  if (err instanceof SchemaMismatchError) {
    console.error(err.report.endpoint); // 'GET /boards/{id}/cards'
    console.error(err.report.issues);   // [{ path, expected, received }]
  }
}
```

The `ZodError` is still there on `err.cause` if you depend on the raw issues:

```ts
if (err instanceof SchemaMismatchError && err.cause instanceof ZodError) {
  console.error(err.cause.issues);
}
```

**Why a new type.** `report` names field paths and types and never the values at them, so it can go straight into a bug report or a log line without carrying card names, comment text or custom field contents with it. It also means you no longer need to know that this library validates with Zod in order to catch a drifted response.

## `createBatchRun` removed from `trello.js/core`

`createBatchRun` was dead code — the batch runner in use is `createBatchRunner`, reached through `trello.batch.run(...)`. If you imported `createBatchRun` directly, use the batch namespace instead:

```ts
const [board, cards] = await trello.batch.run(b => [
  b.boards.getBoard({ id }),
  b.boards.getBoardCards({ id }),
]);
```

See the [batch recipe](/recipes/batch).

## `PerformBatch` removed from `trello.js/parameters`

The same story: nothing referenced it. The batch endpoint's parameter type is `Run`.

## New: board exports

Five endpoints the Trello spec documents and v2 did not expose:

```ts
const { id: exportId } = await trello.boards.createBoardExport({ id: boardId });
const status = await trello.boards.getBoardExport({ id: boardId, idExport: exportId });
const latest = await trello.boards.getBoardMostRecentExport({ id: boardId });
```

`downloadBoardExport` and `deleteBoardExport` round out the set. Nothing to migrate — these are additions.

## Unchanged

- `skipParsing` works exactly as before. It remains the blunter instrument: it turns off schemas entirely, including transforms like `z.coerce.date()`. Prefer `onSchemaMismatch`, which only gives up on the responses that actually failed.
- HTTP errors, network errors and the automatic 429 retry are untouched.
- Every namespace, method, parameter type and model schema is unchanged.
- `TRELLO_STRICT_SCHEMAS=true` still switches response schemas to strict mode; it now also forces `onSchemaMismatch` to `'throw'`, so an audit run cannot report a clean sweep over a broken schema.
