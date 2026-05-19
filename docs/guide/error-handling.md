---
title: Error Handling — trello.js
description: Handle HTTP errors, ZodError schema mismatches, and network failures from trello.js. Built-in 429 retry with exponential backoff.
---

# Error Handling

Three classes of failure can surface from a `trello.js` call. Each is a plain `Error` — no custom error classes to import.

## 1. HTTP errors (non-2xx)

When Trello returns 4xx or 5xx, the client throws:

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

## 2. Schema validation errors (ZodError)

If the response shape differs from what the client expects, Zod throws a `ZodError`:

```ts
import { ZodError } from 'zod';

try {
  await trello.boards.getBoard({ id });
} catch (err) {
  if (err instanceof ZodError) {
    console.error('API returned unexpected shape:', err.issues);
  }
}
```

Schema errors usually mean the Trello swagger has drifted from reality, or you hit a beta endpoint. File an issue with the failing payload.

## 3. Network errors

Anything thrown by `fetch` (DNS failure, connection refused, timeout) bubbles through unchanged — you handle them like any other `fetch` error.

## Automatic 429 retry

Rate-limit responses (`HTTP 429 Too Many Requests`) are retried automatically with exponential backoff: 2 s, 4 s, 8 s, then a final attempt. After four total tries the last 429 is thrown as a normal HTTP error.

You don't need to wrap calls in retry loops. If you find yourself getting 429s a lot, slow down your call rate or use the [batch endpoint](/recipes/boards#batch).

## Pattern: typed handler

```ts
import { ZodError } from 'zod';

async function safeGetBoard(trello, id: string) {
  try {
    return { ok: true, board: await trello.boards.getBoard({ id }) } as const;
  } catch (err) {
    if (err instanceof ZodError) return { ok: false, kind: 'schema', issues: err.issues } as const;
    if (err instanceof Error && err.message.includes('404')) return { ok: false, kind: 'not_found' } as const;
    if (err instanceof Error) return { ok: false, kind: 'http', message: err.message } as const;
    throw err;
  }
}
```
