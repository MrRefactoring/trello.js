---
title: Lists Recipe — trello.js
description: Create, update, archive, and move Trello lists. Reorder all cards in a list. Move a list to another board. Type-safe trello.js snippets.
---

# Lists

Lists are columns on a board. Cards live inside lists.

## Create a list

```ts
const list = await trello.lists.createList({
  idBoard: boardId,
  name: 'In Progress',
  pos: 'bottom',
});
```

## Get a list

```ts
const list = await trello.lists.getList({ id: listId });
const cards = await trello.lists.getListCards({ id: listId });
```

## Update a list

```ts
await trello.lists.updateList({
  id: listId,
  name: 'Done ✅',
  pos: 65535,
});
```

## Archive (close) a list

```ts
await trello.lists.archiveList({ id: listId, value: true });
```

Pass `value: false` to restore.

## Move all cards from a list to another

```ts
await trello.lists.moveAllListCards({
  id: sourceListId,
  idBoard: boardId,
  idList: targetListId,
});
```

Useful for "Sprint complete" workflows — move all done cards to an archive list in one call.

## Archive all cards in a list

```ts
await trello.lists.archiveAllListCards({ id: listId });
```

## Move a list to a different board

```ts
await trello.lists.moveListToBoard({ id: listId, value: targetBoardId });
```

The source and target boards must both be accessible by your token.
