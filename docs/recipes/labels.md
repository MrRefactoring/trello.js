---
title: Labels Recipe — trello.js
description: Create coloured labels on Trello boards, rename, recolour, assign to cards, delete. Type-safe trello.js snippets.
---

# Labels

Labels are coloured tags scoped to a board. Cards can carry multiple labels.

## Create a label on a board

```ts
const label = await trello.boards.createBoardLabel({
  id: boardId,
  name: 'bug',
  color: 'red',
});
```

Allowed colours: `yellow`, `purple`, `blue`, `red`, `green`, `orange`, `black`, `sky`, `pink`, `lime`, `null` (no colour).

## List a board's labels

```ts
const labels = await trello.boards.getBoardLabels({ id: boardId });
```

## Rename or recolour a label

```ts
await trello.labels.updateLabel({
  id: labelId,
  name: 'critical-bug',
  color: 'red',
});
```

## Update a single field

```ts
await trello.labels.updateLabelField({
  id: labelId,
  field: 'color',
  value: 'orange',
});
```

## Assign a label to a card

```ts
await trello.cards.addCardLabel({ id: cardId, value: labelId });
```

## Remove a label from a card

```ts
await trello.cards.removeCardLabel({ id: cardId, idLabel: labelId });
```

## Create a label inline on a card

If the label doesn't exist yet:

```ts
await trello.cards.createCardLabel({
  id: cardId,
  color: 'green',
  name: 'shipped',
});
```

## Delete a label

```ts
await trello.labels.deleteLabel({ id: labelId });
```

Deletion is board-wide — the label is also removed from every card that carried it.
