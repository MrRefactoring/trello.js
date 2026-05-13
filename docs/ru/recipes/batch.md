---
title: Batch — trello.js
description: Выполнение до 10 GET-запросов Trello в одном HTTP round-trip. Типизированный tuple-результат и per-item обработка ошибок.
---

# Batch

Batch-эндпоинт выполняет **до 10 GET-запросов** одним HTTP round-trip. Полезно, когда иначе пришлось бы делать пачку маленьких чтений.

## Базовое использование

```ts
const [board, lists, members] = await trello.batch.run((b) => [
  b.boards.getBoard({ id: boardId }),
  b.boards.getBoardLists({ id: boardId }),
  b.boards.getBoardMembers({ id: boardId }),
] as const);

console.log(board.name, lists.length, members.length);
```

Результат — tuple, каждый элемент типизирован как return type соответствующего вызова. `as const` сохраняет порядок tuple для TypeScript inference.

## Что принимается

- **Только GET-запросы.** POST/PUT/DELETE через batch не работают.
- **До 10 запросов в batch.** Большие batch отклоняются.
- Каждый запрос — вызов на namespaced-клиенте, передаваемом в builder.

## Per-item обработка ошибок

Если один элемент вернёт non-2xx, его individual promise упадёт с `Error('Batch request failed')` — остальные при этом резолвятся:

```ts
try {
  const [board, missing] = await trello.batch.run((b) => [
    b.boards.getBoard({ id: validId }),
    b.boards.getBoard({ id: 'definitely-not-real' }),
  ] as const);
} catch (err) {
  // Promise.all падает на первой ошибке
}
```

Чтобы инспектировать частичные успехи — await через `Promise.allSettled`:

```ts
const promises = [
  trello.boards.getBoard({ id: validId }),
  trello.boards.getBoard({ id: 'bad' }),
];
const results = await Promise.allSettled(
  await trello.batch.run(() => promises as readonly Promise<unknown>[]),
);
```

## Когда batch не нужен

- Один запрос — overhead не оправдан
- Долгие fetch'и (у batch таймаут короче, чем у per-request)
- Мутации (PUT/POST/DELETE) — не поддерживаются

## Raw batch-эндпоинт

`trello.batch.run` — это высокоуровневый builder. Если нужен полный контроль над
сырым списком URL — импортируйте низкоуровневый `run` из subpath `trello.js/batch`:

```ts
import { createClient } from 'trello.js/core';
import { run } from 'trello.js/batch';

const client = createClient({ apiKey, apiToken });

const responses = await run(client, {
  urls: '/boards/abc,/cards/xyz,/lists/123',
});
```

Вернёт массив `{ "200": data }` или `{ "4xx": "error message" }` объектов, по одному на URL.
