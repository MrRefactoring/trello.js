---
title: Поиск — trello.js
description: Поиск карточек, досок, участников и организаций Trello. Фильтрация по доске, лимит результатов, выбор полей. Типобезопасные примеры trello.js.
---

# Поиск

Search-эндпоинт индексирует всё, что видно вашему токену: карточки, доски, участники, организации.

## Поиск по всем типам объектов

```ts
const result = await trello.search.search({ query: 'release notes' });

result.cards?.forEach((c) => console.log('card:', c.name));
result.boards?.forEach((b) => console.log('board:', b.name));
result.members?.forEach((m) => console.log('member:', m.fullName));
result.organizations?.forEach((o) => console.log('org:', o.displayName));
```

Форма ответа — `{ cards?, boards?, members?, organizations?, options? }`. Каждый массив присутствует только если есть совпадения.

## Ограничение типов

```ts
const result = await trello.search.search({
  query: 'release',
  modelTypes: 'cards,boards',
  cards_limit: 20,
  boards_limit: 5,
});
```

Доступные `modelTypes`: `actions`, `boards`, `cards`, `members`, `organizations`. Через запятую.

## Поиск внутри конкретной доски

```ts
const result = await trello.search.search({
  query: 'bug',
  idBoards: boardId,
  modelTypes: 'cards',
});
```

`idBoards` принимает один ID, список через запятую или литерал `'mine'`.

## Поиск только участников

Специальный, более быстрый эндпоинт:

```ts
const members = await trello.search.searchMembers({
  query: 'alice',
  limit: 10,
});
```

## Выбор полей

Сократите ответ, указав только нужные поля:

```ts
const result = await trello.search.search({
  query: 'release',
  card_fields: 'name,url,due',
  board_fields: 'name,url',
});
```

## Лаг search-индекса

Search-индекс Trello не realtime. Карточка, созданная секунды назад, может не появиться в результатах до ~10 секунд. Не полагайтесь на search для read-your-writes consistency — используйте `getCard` или `getBoardCards`.
