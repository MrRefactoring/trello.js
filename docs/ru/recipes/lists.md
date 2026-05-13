---
title: Списки — trello.js
description: Создание, обновление, архивирование и перенос списков Trello. Перенос всех карточек из одного списка в другой. Перенос списка на другую доску.
---

# Списки

Списки — это колонки на доске. Карточки живут внутри списков.

## Создание списка

```ts
const list = await trello.lists.createList({
  idBoard: boardId,
  name: 'In Progress',
  pos: 'bottom',
});
```

## Получение списка

```ts
const list = await trello.lists.getList({ id: listId });
const cards = await trello.lists.getListCards({ id: listId });
```

## Обновление списка

```ts
await trello.lists.updateList({
  id: listId,
  name: 'Done ✅',
  pos: 65535,
});
```

## Архивирование (закрытие) списка

```ts
await trello.lists.archiveList({ id: listId, value: true });
```

Передайте `value: false` для восстановления.

## Перенос всех карточек из одного списка в другой

```ts
await trello.lists.moveAllListCards({
  id: sourceListId,
  idBoard: boardId,
  idList: targetListId,
});
```

Удобно для workflow «спринт завершён» — переносим все done-карточки в архивный список одним вызовом.

## Архивирование всех карточек в списке

```ts
await trello.lists.archiveAllListCards({ id: listId });
```

## Перенос списка на другую доску

```ts
await trello.lists.moveListToBoard({ id: listId, value: targetBoardId });
```

Обе доски должны быть доступны вашему токену.
