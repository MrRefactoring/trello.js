---
title: Batch Recipe — trello.js
description: Run up to 10 Trello GET requests in a single HTTP round-trip. Type-safe tuple result with per-item error handling.
---

# Batch

The batch endpoint runs **up to 10 GET requests** in one HTTP round-trip. Useful when you'd otherwise issue a flurry of small reads.

## Basic usage

```ts
const [board, lists, members] = await trello.batch.run((b) => [
  b.boards.getBoard({ id: boardId }),
  b.boards.getBoardLists({ id: boardId }),
  b.boards.getBoardMembers({ id: boardId }),
] as const);

console.log(board.name, lists.length, members.length);
```

The result is a tuple — each entry is typed as the return type of its corresponding call. `as const` preserves tuple ordering for TypeScript inference.

## What it accepts

- **GET requests only.** Trello's batch endpoint does not accept POST/PUT/DELETE.
- **Up to 10 requests per batch.** Larger batches will error.
- Each request must be a call on the namespaced client passed to the builder.

## Per-item error handling

If one item returns non-2xx, its individual promise rejects with `Error('Batch request failed')` — the rest still resolve:

```ts
try {
  const [board, missing] = await trello.batch.run((b) => [
    b.boards.getBoard({ id: validId }),
    b.boards.getBoard({ id: 'definitely-not-real' }),
  ] as const);
} catch (err) {
  // Promise.all rejects on the first failure
}
```

To inspect partial successes, await individual promises with `Promise.allSettled`:

```ts
const promises = [
  trello.boards.getBoard({ id: validId }),
  trello.boards.getBoard({ id: 'bad' }),
];
const results = await Promise.allSettled(
  await trello.batch.run(() => promises as readonly Promise<unknown>[]),
);
```

## When NOT to use batch

- Single requests — overhead isn't worth it
- Long-running fetches (Trello has a per-batch timeout shorter than per-request)
- Mutations (PUT/POST/DELETE) — not supported

## Raw batch endpoint

`trello.batch.run` is the high-level builder. If you need full control over the
raw URL list, import the low-level `run` from the `trello.js/batch` subpath:

```ts
import { createClient } from 'trello.js/core';
import { run } from 'trello.js/batch';

const client = createClient({ apiKey, apiToken });

const responses = await run(client, {
  urls: '/boards/abc,/cards/xyz,/lists/123',
});
```

Returns an array of `{ "200": data }` or `{ "4xx": "error message" }` objects, one per URL.
