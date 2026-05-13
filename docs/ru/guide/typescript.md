---
title: TypeScript — trello.js
description: Каждый эндпоинт Trello, параметр и ответ полностью типизированы. Импортируйте Zod-схемы для runtime-валидации payload'ов.
---

# TypeScript

Типы — главная фишка. Каждый эндпоинт, параметр и ответ типизированы на этапе компиляции и валидируются Zod на рантайме.

## Inferred-типы

Импортировать типы обычно не нужно — они выводятся из методов:

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({ apiKey, apiToken });
const board = await trello.boards.getBoard({ id: 'abc' });
//    ^? Board — выведено, полностью типизировано

board.name; // string
board.prefs.background; // string
```

## Явный импорт типов

```ts
import type { Board, Card, Member } from 'trello.js';

function summarize(board: Board, cards: Card[]): string {
  return `${board.name} — ${cards.length} карточек`;
}
```

## Импорт схем

У каждой модели есть соответствующая Zod-схема. Используйте её для валидации данных, не пришедших через клиент (webhook payloads, кэшированные ответы, фикстуры):

```ts
import { BoardSchema, type Board } from 'trello.js';

const payload: unknown = await req.json();
const board: Board = BoardSchema.parse(payload);
```

`parse` бросает `ZodError` при несоответствии. Используйте `safeParse` для result-стиля:

```ts
const result = BoardSchema.safeParse(payload);
if (!result.success) {
  console.error(result.error.issues);
  return;
}
const board = result.data;
```

## Типы параметров

У каждого метода есть соответствующий тип параметров, экспортированный из корня:

```ts
import type { CreateCard } from 'trello.js';

function buildCardParams(listId: string, title: string): CreateCard {
  return { idList: listId, name: title, pos: 'top' };
}
```

## strict mode

`trello.js` собран с `strict: true` и `verbatimModuleSyntax: true`. Работает и в менее строгих проектах, но включать эти опции на своей стороне рекомендуется — они отлавливают реальные баги.
