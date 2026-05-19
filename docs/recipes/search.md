---
title: Search Recipe — trello.js
description: Search Trello cards, boards, members, and organisations. Filter by board, limit results, select fields. Type-safe trello.js examples.
---

# Search

The search endpoint indexes everything visible to your token: cards, boards, members, organisations.

## Search across all object types

```ts
const result = await trello.search.search({ query: 'release notes' });

result.cards?.forEach((c) => console.log('card:', c.name));
result.boards?.forEach((b) => console.log('board:', b.name));
result.members?.forEach((m) => console.log('member:', m.fullName));
result.organizations?.forEach((o) => console.log('org:', o.displayName));
```

The response shape is `{ cards?, boards?, members?, organizations?, options? }` — each array is present only when results are found.

## Limit the object types

```ts
const result = await trello.search.search({
  query: 'release',
  modelTypes: 'cards,boards',
  cards_limit: 20,
  boards_limit: 5,
});
```

Available `modelTypes`: `actions`, `boards`, `cards`, `members`, `organizations`. Comma-separated.

## Search within a specific board

```ts
const result = await trello.search.search({
  query: 'bug',
  idBoards: boardId,
  modelTypes: 'cards',
});
```

`idBoards` accepts a single ID or comma-separated list, or the literal `'mine'`.

## Search members only

A dedicated, faster endpoint:

```ts
const members = await trello.search.searchMembers({
  query: 'alice',
  limit: 10,
});
```

## Field selection

Trim the response by listing only the fields you need:

```ts
const result = await trello.search.search({
  query: 'release',
  card_fields: 'name,url,due',
  board_fields: 'name,url',
});
```

## Search index lag

Trello's search index is not realtime. A card created seconds ago may not appear in results for up to ~10 seconds. Don't rely on search for read-your-writes consistency — use `getCard` or `getBoardCards` for that.
