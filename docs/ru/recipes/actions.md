---
title: Действия — trello.js
description: Чтение activity log Trello, список действий на карточке или доске, редактирование комментариев, реакции на действия.
---

# Действия

Действия (actions) — неизменяемые записи activity-log: кто-то создал карточку, переместил её, прокомментировал, заархивировал доску и т.д.

## Получение одного действия

```ts
const action = await trello.actions.getAction({ id: actionId });
console.log(action.type, action.date, action.memberCreator?.fullName);
```

## Список действий на доске / карточке / списке / участнике

```ts
const recent = await trello.boards.getBoardActions({
  id: boardId,
  filter: 'createCard,updateCard,commentCard',
  limit: 50,
});

const onCard = await trello.cards.getCardActions({ id: cardId });
const byMember = await trello.members.getMemberActions({ id: 'me', limit: 100 });
```

`filter` принимает список типов через запятую. Частые значения: `createCard`, `updateCard`, `commentCard`, `moveCardFromBoard`, `addMemberToCard`.

## Получение связанной сущности

```ts
const board = await trello.actions.getActionBoard({ id: actionId });
const card  = await trello.actions.getActionCard({ id: actionId });
const list  = await trello.actions.getActionList({ id: actionId });
const member = await trello.actions.getActionMember({ id: actionId });
```

## Редактирование комментария

Редактировать можно только действия типа `commentCard` — и только их автору.

```ts
await trello.actions.updateActionText({
  id: actionId,
  value: 'Отредактированный текст комментария.',
});
```

## Удаление действия (комментария)

```ts
await trello.actions.deleteAction({ id: actionId });
```

## Реакция на действие

```ts
const reaction = await trello.actions.createActionReaction({
  id: actionId,
  emoji: '👍',
});

const summary = await trello.actions.getActionReactionSummary({ id: actionId });
```

## Снять свою реакцию

```ts
await trello.actions.deleteActionReaction({
  idAction: actionId,
  id: reaction.id,
});
```
