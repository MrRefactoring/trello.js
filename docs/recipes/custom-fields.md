---
title: Custom Fields Recipe — trello.js
description: Define custom fields on a Trello board, set values on cards, manage dropdown options. Type-safe trello.js snippets.
---

# Custom Fields

Custom fields add structured, typed metadata to cards. Field types: `text`, `number`, `date`, `checkbox`, `list` (dropdown).

> Custom fields require the Custom Fields Power-Up enabled on the board.

## Define a custom field on a board

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

## List a board's custom fields

```ts
const fields = await trello.boards.getBoardCustomFields({ id: boardId });
```

## Add options to a dropdown field

```ts
const option = await trello.customFields.createCustomFieldOption({
  id: fieldId,
  value: { text: 'High' },
  color: 'red',
  pos: 'bottom',
});
```

## List options for a dropdown field

```ts
const options = await trello.customFields.getCustomFieldOptions({ id: fieldId });
```

## Set a value on a card

For a dropdown (list) field:

```ts
await trello.cards.updateCardCustomFieldItem({
  id: cardId,
  idCustomField: fieldId,
  idValue: optionId,
});
```

For a text/number/date field:

```ts
await trello.cards.updateCardCustomFieldItem({
  id: cardId,
  idCustomField: fieldId,
  value: { number: '42' },
});
```

`value` shapes by type: `{ text: '...' }`, `{ number: '...' }`, `{ date: '...' }`, `{ checked: 'true' | 'false' }`.

## Read all custom field values on a card

```ts
const values = await trello.cards.getCardCustomFieldItems({ id: cardId });
```

## Delete a field or option

```ts
await trello.customFields.deleteCustomFieldOption({ id: fieldId, idCustomFieldOption: optionId });
await trello.customFields.deleteCustomField({ id: fieldId });
```
