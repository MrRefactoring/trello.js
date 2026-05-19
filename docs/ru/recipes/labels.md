---
title: Метки — trello.js
description: Создание цветных меток на досках Trello, переименование, смена цвета, назначение на карточки, удаление.
---

# Метки

Метки — цветные теги, привязанные к доске. У карточки может быть несколько меток.

## Создание метки на доске

```ts
const label = await trello.boards.createBoardLabel({
  id: boardId,
  name: 'bug',
  color: 'red',
});
```

Допустимые цвета: `yellow`, `purple`, `blue`, `red`, `green`, `orange`, `black`, `sky`, `pink`, `lime`, `null` (без цвета).

## Список меток доски

```ts
const labels = await trello.boards.getBoardLabels({ id: boardId });
```

## Переименование или смена цвета

```ts
await trello.labels.updateLabel({
  id: labelId,
  name: 'critical-bug',
  color: 'red',
});
```

## Обновление одного поля

```ts
await trello.labels.updateLabelField({
  id: labelId,
  field: 'color',
  value: 'orange',
});
```

## Назначение метки на карточку

```ts
await trello.cards.addCardLabel({ id: cardId, value: labelId });
```

## Снятие метки с карточки

```ts
await trello.cards.removeCardLabel({ id: cardId, idLabel: labelId });
```

## Создание метки inline на карточке

Если метка ещё не существует:

```ts
await trello.cards.createCardLabel({
  id: cardId,
  color: 'green',
  name: 'shipped',
});
```

## Удаление метки

```ts
await trello.labels.deleteLabel({ id: labelId });
```

Удаление действует на всю доску — метка снимается со всех карточек, на которых стояла.
