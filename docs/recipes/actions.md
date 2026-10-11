---
title: Actions Recipe — trello.js
description: Read Trello activity log entries, list actions on a card or board, edit comments, react to actions. Type-safe trello.js snippets.
---

# Actions

Actions are immutable activity-log entries: someone created a card, moved it, commented, archived a board, etc.

## Get a single action

```ts
const action = await trello.actions.getAction({ id: actionId });
console.log(action.type, action.date, action.memberCreator?.fullName);
```

## Read typed action data

`Action` includes an open fallback whose `data` is `unknown`. Checking `action.type` alone does not exclude that fallback. Validate a known action with its branch schema before reading its data:

```ts
import { ActionCommentCardSchema } from 'trello.js/models';

const action = await trello.actions.getAction({ id: actionId });

if (action.type === 'commentCard') {
  const comment = ActionCommentCardSchema.parse(action);
  console.log(comment.data.text);
}
```

`parse` checks the action type and data shape, returns an `ActionCommentCard`, and throws `ZodError` if the payload does not match. Each of the twenty-nine typed branches exports its own model and schema. `ActionUnknown.data` remains `unknown` and requires validation before use.

## List actions on a board / card / list / member

```ts
const recent = await trello.boards.getBoardActions({
  id: boardId,
  filter: 'createCard,updateCard,commentCard',
  limit: 50,
});

const onCard = await trello.cards.getCardActions({ id: cardId });
const byMember = await trello.members.getMemberActions({ id: 'me', limit: 100 });
```

`filter` accepts a comma-separated list of action types. Common values: `createCard`, `updateCard`, `commentCard`, `moveCardFromBoard`, `addMemberToCard`.

## Get the related entity for an action

```ts
const board = await trello.actions.getActionBoard({ id: actionId });
const card  = await trello.actions.getActionCard({ id: actionId });
const list  = await trello.actions.getActionList({ id: actionId });
const member = await trello.actions.getActionMember({ id: actionId });
```

## Edit a comment

Only actions of type `commentCard` can be edited — and only by the original commenter.

```ts
await trello.actions.updateActionText({
  id: actionId,
  value: 'Edited comment text.',
});
```

## Delete an action (a comment)

```ts
await trello.actions.deleteAction({ id: actionId });
```

## React to an action

```ts
const reaction = await trello.actions.createActionReaction({
  id: actionId,
  emoji: '👍',
});

const summary = await trello.actions.getActionReactionSummary({ id: actionId });
```

## Remove your reaction

```ts
await trello.actions.deleteActionReaction({
  idAction: actionId,
  id: reaction.id,
});
```
