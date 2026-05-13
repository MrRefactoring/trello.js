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

<p><strong>Типобезопасный клиент Trello REST API для Node.js и браузеров.</strong></p>
</div>

> [English](./README.md) · **Русский**

## Почему trello.js

- 🔒 **Полностью типизирован** — каждый эндпоинт, параметр и ответ. Никаких `any`, никаких догадок.
- ✅ **Runtime-валидация** через [Zod 4](https://zod.dev) — расхождения между документацией и реальностью ловятся на границе.
- 🌳 **Tree-shakable** — subpath-экспорты на каждый namespace (`trello.js/boards`, `trello.js/cards`, …). Платите только за то, что импортируете.
- 📦 **Только ESM**, современный Node.js (≥22), готов для браузера через любой сборщик.
- 🧪 **Полное покрытие API** — 17 namespace, 250+ методов, генерируется из официального swagger Trello.
- ⚡ **Встроенный retry** для 429-ответов с экспоненциальным backoff.
- 📐 **Одна runtime-зависимость** — `zod`.

## Установка

> Требуется Node.js 22+ и ESM-проект (`"type": "module"` или сборщик).

```bash
pnpm add trello.js
# или
npm install trello.js
# или
yarn add trello.js
```

## Быстрый старт

1. Получите [API key и token](https://trello.com/power-ups/admin) от Trello.
2. Создайте клиент и сделайте первый запрос:

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});

const board = await trello.boards.createBoard({
  name: 'Моя первая доска',
  desc: 'From trello.js with love',
});

console.log(board.url);
```

Всё.

## Рецепты

### Доски

```ts
const board = await trello.boards.getBoard({ id: boardId });
const lists = await trello.boards.getBoardLists({ id: boardId });

await trello.boards.updateBoard({ id: boardId, closed: true });
```

### Карточки

```ts
const card = await trello.cards.createCard({
  idList: listId,
  name: 'Написать release notes',
  pos: 'top',
});

await trello.cards.updateCard({ id: card.id, idList: targetListId });
await trello.cards.createCardComment({ id: card.id, text: 'Готово.' });
```

### Поиск

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
  description: 'Стрим активности',
});
```

> `callbackURL` должен отвечать `200` на `HEAD`-запрос — Trello проверяет в момент создания.

## Tree-shaking-импорты

Для минимального бандла импортируйте функции namespace'ов напрямую:

```ts
import { createClient } from 'trello.js/core';
import { getBoard } from 'trello.js/boards';
import { createCard } from 'trello.js/cards';

const client = createClient({ apiKey, apiToken });

const board = await getBoard(client, { id });
const card = await createCard(client, { idList: board.idLists?.[0], name: 'Hi' });
```

Сборщики выкинут неиспользуемые namespace. 15+ namespace'ов, которые вы не импортируете, в бандл не попадут.

## TypeScript и схемы

Типы выводятся из методов автоматически:

```ts
const board = await trello.boards.getBoard({ id });
//    ^? Board
```

У каждой модели есть runtime Zod-схема:

```ts
import { BoardSchema, type Board } from 'trello.js';

const board: Board = BoardSchema.parse(payload);
```

## Обработка ошибок

Non-2xx ответы бросают `Error('Request failed: <status> <statusText> - <body>')`. Несовпадения схемы — `ZodError`. Rate-limit 429 ретраятся автоматически (2 с, 4 с, 8 с).

```ts
try {
  await trello.boards.getBoard({ id: 'bad' });
} catch (err) {
  if (err instanceof Error && err.message.includes('404')) {
    // обработка not-found
  }
}
```

Подробности — в [гайде по обработке ошибок](https://mrrefactoring.github.io/trello.js/ru/guide/error-handling).

## Документация

📖 **[Полная документация](https://mrrefactoring.github.io/trello.js/ru/)** — гайды, рецепты, миграция  
📚 **[API reference](https://mrrefactoring.github.io/trello.js/api/)** — каждый метод, генерируется из исходников (только на английском)  
🇬🇧 **[English version](https://mrrefactoring.github.io/trello.js/)**

## Совместимость

- Node.js ≥ 22 (только ESM)
- TypeScript ≥ 5.0 рекомендуется
- Современные сборщики: Vite, webpack 5+, Rollup, esbuild

## Мигрируете с v1?

См. [гайд миграции v1 → v2](https://mrrefactoring.github.io/trello.js/ru/migration/v1-to-v2). Главные изменения: `new TrelloClient` → `createTrelloClient`, `key/token` → `apiKey/apiToken`, только ESM, Node 22+.

## Contributing

См. [CONTRIBUTING.md](./CONTRIBUTING.md). Большая часть `src/` генерируется из swagger Trello — пожалуйста, не редактируйте вручную `src/api/`, `src/models/`, `src/parameters/`.

## Лицензия

[MIT](./LICENSE) © Vladislav Tupikin
