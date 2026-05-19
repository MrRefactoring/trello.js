---
title: Boards Recipe — trello.js
description: Create, read, update, archive, and delete Trello boards. Invite members, list cards, batch reads. Type-safe snippets.
---

# Boards

Boards are the top-level container in Trello. They hold lists, cards, members, labels and custom fields.

## Create a board

```ts
const board = await trello.boards.createBoard({
  name: 'Q3 Roadmap',
  desc: 'Planning board for Q3 deliverables',
  defaultLists: false,
});
console.log(board.url);
```

`defaultLists: false` skips Trello's auto-creation of "To Do / Doing / Done". Set up your own lists explicitly.

## Read a board

```ts
const board = await trello.boards.getBoard({ id: boardId });
```

Need only specific fields? Use `fields`:

```ts
const board = await trello.boards.getBoard({
  id: boardId,
  fields: 'name,url,closed',
});
```

## Update a board

```ts
await trello.boards.updateBoard({
  id: boardId,
  name: 'Q3 Roadmap — finalised',
  closed: false,
});
```

## List the board's lists and cards

```ts
const lists = await trello.boards.getBoardLists({ id: boardId });
const cards = await trello.boards.getBoardCards({ id: boardId });
```

## Invite a member by email

```ts
await trello.boards.inviteBoardMember({
  id: boardId,
  email: 'alice@example.com',
  type: 'normal',
});
```

## Archive (close) a board

```ts
await trello.boards.updateBoard({ id: boardId, closed: true });
```

## Delete a board

```ts
await trello.boards.deleteBoard({ id: boardId });
```

Deletion is permanent. Trello does not soft-delete boards.

## Batch multiple reads {#batch}

For up to 10 GET requests, the batch endpoint is one HTTP round-trip:

```ts
const [board, lists, members] = await trello.batch.run((b) => [
  b.boards.getBoard({ id: boardId }),
  b.boards.getBoardLists({ id: boardId }),
  b.boards.getBoardMembers({ id: boardId }),
] as const);
```

Each item in the tuple is typed as its individual call's return type.
