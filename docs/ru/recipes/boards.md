---
title: Доски — trello.js
description: Создание, чтение, обновление, архивирование и удаление досок Trello. Приглашение участников, список карточек, batch-чтения. Типобезопасные сниппеты.
---

# Доски

Доски — это контейнер верхнего уровня в Trello. В них живут списки, карточки, участники, метки и custom fields.

## Создание доски

```ts
const board = await trello.boards.createBoard({
  name: 'Q3 Roadmap',
  desc: 'Доска планирования на третий квартал',
  defaultLists: false,
});
console.log(board.url);
```

`defaultLists: false` отключает автосоздание списков "To Do / Doing / Done". Создавайте свои списки явно.

## Чтение доски

```ts
const board = await trello.boards.getBoard({ id: boardId });
```

Нужны только определённые поля? Используйте `fields`:

```ts
const board = await trello.boards.getBoard({
  id: boardId,
  fields: 'name,url,closed',
});
```

## Обновление доски

```ts
await trello.boards.updateBoard({
  id: boardId,
  name: 'Q3 Roadmap — финализирована',
  closed: false,
});
```

## Получение списков и карточек доски

```ts
const lists = await trello.boards.getBoardLists({ id: boardId });
const cards = await trello.boards.getBoardCards({ id: boardId });
```

## Приглашение участника по email

```ts
await trello.boards.inviteBoardMember({
  id: boardId,
  email: 'alice@example.com',
  type: 'normal',
});
```

## Архивирование (закрытие) доски

```ts
await trello.boards.updateBoard({ id: boardId, closed: true });
```

## Удаление доски

```ts
await trello.boards.deleteBoard({ id: boardId });
```

Удаление безвозвратное. Trello не делает soft-delete досок.

## Пакетные чтения {#batch}

До 10 GET-запросов одним HTTP round-trip через batch-эндпоинт:

```ts
const [board, lists, members] = await trello.batch.run((b) => [
  b.boards.getBoard({ id: boardId }),
  b.boards.getBoardLists({ id: boardId }),
  b.boards.getBoardMembers({ id: boardId }),
] as const);
```

Каждый элемент tuple типизирован как return type соответствующего вызова.
