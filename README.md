<div align="center">
  <img alt="trello.js logo" src="https://raw.githubusercontent.com/MrRefactoring/trello.js/master/docs/public/logo.svg" width="320"/>

<h1>trello.js</h1>

<p>
<a href="https://www.npmjs.com/package/trello.js"><img alt="npm version" src="https://img.shields.io/npm/v/trello.js.svg?style=flat-square"/></a>
<a href="https://www.npmjs.com/package/trello.js"><img alt="npm downloads" src="https://img.shields.io/npm/dm/trello.js.svg?style=flat-square"/></a>
<a href="https://bundlephobia.com/package/trello.js"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/trello.js?style=flat-square"/></a>
<a href="https://github.com/MrRefactoring/trello.js/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/MrRefactoring/trello.js/ci.yml?branch=master&style=flat-square"/></a>
<a href="https://github.com/MrRefactoring/trello.js/blob/master/LICENSE"><img alt="license" src="https://img.shields.io/github/license/MrRefactoring/trello.js?color=green&style=flat-square"/></a>
</p>

<p><strong>Type-safe Trello REST API client for Node.js and the browser.</strong></p>
</div>

> **English** · [Русский](./README.ru.md)

## Why trello.js

- 🔒 **Fully typed.** Every endpoint, parameter and response has a type, and none of them fall back to `any`.
- ✅ **Runtime validation.** Responses are checked by [Zod 4](https://zod.dev), so a difference between what the docs describe and what Trello sends is caught where the response arrives.
- 🌳 **Tree-shakable.** Subpath exports per namespace (`trello.js/boards`, `trello.js/cards`, …), plus `trello.js/models` and `trello.js/parameters`. You pay for what you import.
- 📦 **ESM-only.** Node.js 22 and newer, browser-ready through any bundler.
- 🧪 **Full API coverage.** 17 namespaces and 250+ methods, generated from the official Trello swagger.
- ⚡ **Built-in retry.** 429 responses retry on their own, with exponential backoff.
- 📐 **One runtime dependency.** Just `zod`.

## Installation

> Requires Node.js 22+ and an ESM project (`"type": "module"` or a bundler).

```bash
pnpm add trello.js
# or
npm install trello.js
# or
yarn add trello.js
```

## Quick start

1. Get your [API key and token](https://trello.com/power-ups/admin) from Trello.
2. Create a client and make your first call:

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});

const board = await trello.boards.createBoard({
  name: 'My first board',
  desc: 'From trello.js with love',
});

console.log(board.url);
```

## Recipes

### Boards

```ts
const board = await trello.boards.getBoard({ id: boardId });
const lists = await trello.boards.getBoardLists({ id: boardId });

await trello.boards.updateBoard({ id: boardId, closed: true });
```

### Cards

```ts
const card = await trello.cards.createCard({
  idList: listId,
  name: 'Write release notes',
  pos: 'top',
});

await trello.cards.updateCard({ id: card.id, idList: targetListId });
await trello.cards.createCardComment({ id: card.id, text: 'Done.' });
```

### Search

```ts
const result = await trello.search.search({
  query: 'release',
  modelTypes: 'cards,boards',
  cards_limit: 20,
});

result.cards?.forEach((c) => console.log(c.name));
```

### Webhooks

```ts
const webhook = await trello.webhooks.createWebhook({
  idModel: boardId,
  callbackURL: 'https://my-app.example.com/trello/hook',
  description: 'Activity stream',
});
```

> Your `callbackURL` has to answer a `HEAD` request with `200`. Trello checks it at creation time.

## Tree-shakable imports

To keep the bundle as small as possible, import the namespace functions directly:

```ts
import { createClient } from 'trello.js/core';
import { getBoard } from 'trello.js/boards';
import { createCard } from 'trello.js/cards';

const client = createClient({ apiKey, apiToken });

const board = await getBoard(client, { id });
const card = await createCard(client, { idList: board.idLists?.[0], name: 'Hi' });
```

Bundlers strip out unused namespaces. The 15+ namespaces you don't import never end up in your output.

## TypeScript & schemas

Return types come with the methods:

```ts
const board = await trello.boards.getBoard({ id });
//    ^? Board
```

Every model also has a runtime Zod schema. Import it from the root or from the dedicated subpath:

```ts
import { BoardSchema, type Board } from 'trello.js/models';

const board: Board = BoardSchema.parse(payload);
```

To bypass parsing entirely, pass `skipParsing: true` when creating the client. `schema.parse()` is then never called, so no response raises `ZodError` and the schema transforms are skipped as well: date fields stay strings instead of becoming `Date` objects. That trades runtime type safety for speed and for resilience against schema drift, so leave it `false` (the default) unless you have a reason.

```ts
const trello = createTrelloClient({ apiKey, apiToken, skipParsing: true });
```

## Error handling

Non-2xx responses throw `Error('Request failed: <status> <statusText> - <body>')`, and schema mismatches throw `ZodError`. Rate-limited 429s retry automatically, waiting 2 s, then 4 s, then 8 s.

```ts
try {
  await trello.boards.getBoard({ id: 'bad' });
} catch (err) {
  if (err instanceof Error && err.message.includes('404')) {
    // handle not-found
  }
}
```

See the [error handling guide](https://mrrefactoring.github.io/trello.js/guide/error-handling) for details.

## Cancelling requests

Every endpoint method takes an optional last argument carrying an `AbortSignal`. It goes straight to `fetch`, so an aborted request rejects with the signal's reason, and a 429 backoff that is still counting down is cut short rather than run to its end.

```ts
const controller = new AbortController();
setTimeout(() => controller.abort(), 5_000);

const board = await trello.boards.getBoard({ id }, { signal: controller.signal });
```

`AbortSignal.timeout(5_000)` works just as well when the only thing you need is a deadline.

The flat, tree-shakable functions take it in the same position:

```ts
const board = await getBoard(client, { id }, { signal: controller.signal });
```

`batch.run` is the one exception: it takes only its builder, and its requests share a single HTTP call.

## Documentation

- 📖 [Full documentation](https://mrrefactoring.github.io/trello.js/): guides, recipes, migration.
- 📚 [API reference](https://mrrefactoring.github.io/trello.js/api/): every method, generated from source.
- 🇷🇺 [Русская версия](https://mrrefactoring.github.io/trello.js/ru/).

## Compatibility

- Node.js ≥ 22 (ESM-only)
- TypeScript ≥ 6.0 recommended
- Modern bundlers: Vite, webpack 5+, Rollup, esbuild

## Migrating from v1?

See the [v1 → v2 migration guide](https://mrrefactoring.github.io/trello.js/migration/v1-to-v2). The main changes: `new TrelloClient` becomes `createTrelloClient`, `key`/`token` become `apiKey`/`apiToken`, the package is ESM-only, and it needs Node 22+.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Most of `src/` is generated from the Trello swagger, so please don't hand-edit `src/api/`, `src/models/`, or `src/parameters/`.

## License

[MIT](./LICENSE) © Vladislav Tupikin
