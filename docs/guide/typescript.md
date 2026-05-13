---
title: TypeScript — trello.js
description: Every Trello endpoint, parameter, and response is fully typed. Import Zod schemas for runtime validation of payloads.
---

# TypeScript

Types are the headline feature. Every endpoint, parameter, and response is typed at compile time, and validated by Zod at runtime.

## Inferred types

You rarely need to import types — they flow from the methods:

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({ apiKey, apiToken });
const board = await trello.boards.getBoard({ id: 'abc' });
//    ^? Board — inferred, fully typed

board.name; // string
board.prefs.background; // string
```

## Importing types explicitly

```ts
import type { Board, Card, Member } from 'trello.js';

function summarize(board: Board, cards: Card[]): string {
  return `${board.name} — ${cards.length} cards`;
}
```

## Importing schemas

Every model has a corresponding Zod schema. Use it to validate data you didn't get through the client (e.g. webhook payloads, cached responses, fixtures):

```ts
import { BoardSchema, type Board } from 'trello.js';

const payload: unknown = await req.json();
const board: Board = BoardSchema.parse(payload);
```

`parse` throws `ZodError` on mismatch. Use `safeParse` if you want a result-style API:

```ts
const result = BoardSchema.safeParse(payload);
if (!result.success) {
  console.error(result.error.issues);
  return;
}
const board = result.data;
```

## Parameter types

Every method has a corresponding parameter type, exported from the root:

```ts
import type { CreateCard } from 'trello.js';

function buildCardParams(listId: string, title: string): CreateCard {
  return { idList: listId, name: title, pos: 'top' };
}
```

## strict mode

`trello.js` is built with `strict: true` and `verbatimModuleSyntax: true`. It will work in less strict projects, but enabling these options on your side is recommended — they catch real bugs early.
