---
title: Custom Fields — trello.js
description: Определение custom fields на доске Trello, установка значений на карточках, управление опциями выпадающих списков.
---

# Custom Fields

Custom fields добавляют структурированные типизированные метаданные к карточкам. Типы полей: `text`, `number`, `date`, `checkbox`, `list` (выпадающий список).

> Custom fields требуют включённого Power-Up «Custom Fields» на доске.

## Определение custom field на доске

```ts
const field = await trello.customFields.createCustomField({
  idModel: boardId,
  modelType: 'board',
  name: 'Priority',
  type: 'list',
  pos: 'bottom',
  display_cardFront: true,
});
```

## Список custom fields доски

```ts
const fields = await trello.boards.getBoardCustomFields({ id: boardId });
```

## Добавление опций к выпадающему полю

```ts
const option = await trello.customFields.createCustomFieldOption({
  id: fieldId,
  value: { text: 'High' },
  color: 'red',
  pos: 'bottom',
});
```

## Список опций выпадающего поля

```ts
const options = await trello.customFields.getCustomFieldOptions({ id: fieldId });
```

## Установка значения на карточке

Для dropdown (list) поля:

```ts
await trello.cards.updateCardCustomFieldItem({
  id: cardId,
  idCustomField: fieldId,
  idValue: optionId,
});
```

Для text/number/date поля:

```ts
await trello.cards.updateCardCustomFieldItem({
  id: cardId,
  idCustomField: fieldId,
  value: { number: '42' },
});
```

Форма `value` по типам: `{ text: '...' }`, `{ number: '...' }`, `{ date: '...' }`, `{ checked: 'true' | 'false' }`.

## Чтение всех значений custom fields на карточке

```ts
const values = await trello.cards.getCardCustomFieldItems({ id: cardId });
```

## Удаление поля или опции

```ts
await trello.customFields.deleteCustomFieldOption({ id: fieldId, idCustomFieldOption: optionId });
await trello.customFields.deleteCustomField({ id: fieldId });
```
