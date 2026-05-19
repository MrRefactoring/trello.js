---
title: Checklists Recipe — trello.js
description: Create checklists on Trello cards, add and toggle check items, copy checklists between cards. Type-safe trello.js snippets.
---

# Checklists

Checklists are nested sub-tasks on a card. Each checklist has a name and a list of items.

## Create a checklist on a card

```ts
const checklist = await trello.cards.createCardChecklist({
  id: cardId,
  name: 'Release checklist',
});
```

## Get a checklist

```ts
const checklist = await trello.checklists.getChecklist({ id: checklistId });
const items = await trello.checklists.getChecklistItems({ id: checklistId });
```

## Add a check item

```ts
const item = await trello.checklists.createChecklistItem({
  id: checklistId,
  name: 'Update CHANGELOG',
  checked: false,
  pos: 'bottom',
});
```

## Toggle a check item's state

```ts
await trello.cards.updateCardChecklistItem({
  id: cardId,
  idCheckItem: itemId,
  state: 'complete', // or 'incomplete'
});
```

The update goes through the **card**, not the checklist — that's how Trello scopes per-card state.

## Rename a checklist

```ts
await trello.checklists.updateChecklist({
  id: checklistId,
  name: 'Release v2.0.0',
});
```

## Delete an item / a whole checklist

```ts
await trello.checklists.deleteChecklistItem({ id: checklistId, idCheckItem: itemId });
await trello.checklists.deleteChecklist({ id: checklistId });
```

## Copy a checklist to another card

```ts
const copy = await trello.cards.createCardChecklist({
  id: targetCardId,
  idChecklistSource: checklistId,
});
```
