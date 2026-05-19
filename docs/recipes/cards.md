---
title: Cards Recipe — trello.js
description: Create, update, move, comment on, attach files to Trello cards. Add checklists, labels, members. Type-safe trello.js snippets.
---

# Cards

Cards are the work items inside a list. A card has a name, description, due date, members, labels, checklists, attachments and custom field values.

## Create a card

```ts
const card = await trello.cards.createCard({
  idList: listId,
  name: 'Write release notes',
  desc: 'Cover the v2.0.0 changes, migration steps.',
  pos: 'top',
});
```

`pos` accepts `'top'`, `'bottom'`, or a numeric position.

## Read a card

```ts
const card = await trello.cards.getCard({ id: cardId });
```

## Update a card

```ts
await trello.cards.updateCard({
  id: cardId,
  name: 'Write release notes (v2)',
  due: '2026-06-01T17:00:00Z',
  dueComplete: false,
});
```

## Move a card to a different list

```ts
await trello.cards.updateCard({ id: cardId, idList: targetListId });
```

## Add a comment

```ts
await trello.cards.createCardComment({
  id: cardId,
  text: 'Approved by @alice — proceed.',
});
```

## Attach a file or URL

```ts
await trello.cards.createCardAttachment({
  id: cardId,
  url: 'https://example.com/spec.pdf',
  name: 'Spec',
});
```

## Add a checklist

```ts
const checklist = await trello.cards.createCardChecklist({
  id: cardId,
  name: 'Release checklist',
});

await trello.checklists.createChecklistItem({
  id: checklist.id,
  name: 'Update CHANGELOG',
  checked: false,
});
```

## Assign a label

```ts
await trello.cards.addCardLabel({ id: cardId, value: labelId });
```

## Archive a card

```ts
await trello.cards.updateCard({ id: cardId, closed: true });
```

## Delete a card

```ts
await trello.cards.deleteCard({ id: cardId });
```
