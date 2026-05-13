---
title: Чек-листы — trello.js
description: Создание чек-листов на карточках Trello, добавление и переключение пунктов, копирование чек-листов между карточками.
---

# Чек-листы

Чек-листы — вложенные подзадачи на карточке. У каждого чек-листа есть имя и список пунктов.

## Создание чек-листа на карточке

```ts
const checklist = await trello.cards.createCardChecklist({
  id: cardId,
  name: 'Чек-лист релиза',
});
```

## Получение чек-листа

```ts
const checklist = await trello.checklists.getChecklist({ id: checklistId });
const items = await trello.checklists.getChecklistItems({ id: checklistId });
```

## Добавление пункта

```ts
const item = await trello.checklists.createChecklistItem({
  id: checklistId,
  name: 'Обновить CHANGELOG',
  checked: false,
  pos: 'bottom',
});
```

## Переключение состояния пункта

```ts
await trello.cards.updateCardChecklistItem({
  id: cardId,
  idCheckItem: itemId,
  state: 'complete', // или 'incomplete'
});
```

Обновление идёт через **карточку**, а не через чек-лист — так Trello хранит state per-карточка.

## Переименование чек-листа

```ts
await trello.checklists.updateChecklist({
  id: checklistId,
  name: 'Релиз v2.0.0',
});
```

## Удаление пункта / всего чек-листа

```ts
await trello.checklists.deleteChecklistItem({ id: checklistId, idCheckItem: itemId });
await trello.checklists.deleteChecklist({ id: checklistId });
```

## Копирование чек-листа на другую карточку

```ts
const copy = await trello.cards.createCardChecklist({
  id: targetCardId,
  idChecklistSource: checklistId,
});
```
