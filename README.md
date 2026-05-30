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

- 🔒 **Fully typed** — every endpoint, parameter, and response. No `any`, no guessing.
- ✅ **Runtime validation** powered by [Zod 4](https://zod.dev) — drift between docs and reality is caught at the boundary.
- 🌳 **Tree-shakable** — subpath exports per namespace (`trello.js/boards`, `trello.js/cards`, …) plus `trello.js/models` and `trello.js/parameters`. Pay only for what you import.
- 📦 **ESM-only**, modern Node.js (≥22), browser-ready via any bundler.
- 🧪 **Full API coverage** — 17 namespaces, 250+ methods, auto-generated from the official Trello swagger.
- ⚡ **Built-in retry** for 429 responses with exponential backoff.
- 📐 **One runtime dependency** — `zod`.

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

That's it.

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

> Your `callbackURL` must respond `200` to a `HEAD` request — Trello checks it at creation time.

## Tree-shakable imports

For the smallest possible bundle, import the namespace functions directly:

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

Types flow from the methods automatically:

```ts
const board = await trello.boards.getBoard({ id });
//    ^? Board
```

Every model also has a runtime Zod schema. Import from the root or the dedicated subpath:

```ts
import { BoardSchema, type Board } from 'trello.js/models';

const board: Board = BoardSchema.parse(payload);
```

Need to bypass validation entirely? Pass `skipValidation: true` when creating the client. Responses are then returned as-is — no `schema.parse()`, no `ZodError`, and no schema transforms (date strings stay strings). This trades runtime type-safety for speed and resilience against schema drift; leave it `false` (the default) unless you have a reason.

```ts
const trello = createTrelloClient({ apiKey, apiToken, skipValidation: true });
```

## Error handling

Non-2xx responses throw `Error('Request failed: <status> <statusText> - <body>')`. Schema mismatches throw `ZodError`. Rate-limit 429s retry automatically (2 s, 4 s, 8 s).

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

## Documentation

📖 **[Full documentation](https://mrrefactoring.github.io/trello.js/)** — guides, recipes, migration  
📚 **[API reference](https://mrrefactoring.github.io/trello.js/api/)** — every method, generated from source  
🇷🇺 **[Русская версия](https://mrrefactoring.github.io/trello.js/ru/)**

## Compatibility

- Node.js ≥ 22 (ESM-only)
- TypeScript ≥ 6.0 recommended
- Modern bundlers: Vite, webpack 5+, Rollup, esbuild

## Migrating from v1?

See the [v1 → v2 migration guide](https://mrrefactoring.github.io/trello.js/migration/v1-to-v2). Headline changes: `new TrelloClient` → `createTrelloClient`, `key/token` → `apiKey/apiToken`, ESM-only, Node 22+.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Most of `src/` is auto-generated from the Trello swagger — please don't hand-edit `src/api/`, `src/models/`, or `src/parameters/`.

## License

[MIT](./LICENSE) © Vladislav Tupikin
