---
title: Members Recipe — trello.js
description: Read and update Trello member profile, list a member's boards and cards, manage saved searches, notification channel settings. Type-safe trello.js snippets.
---

# Members

A "member" is any Trello user. The literal id `'me'` refers to the user behind the current token.

## Get the current user

```ts
const me = await trello.members.getMember({ id: 'me' });
console.log(me.fullName, me.email, me.idOrganizations);
```

## Get a specific member

By id or username:

```ts
const alice = await trello.members.getMember({ id: 'alice' });
```

## Update your profile

```ts
await trello.members.updateMember({
  id: 'me',
  fullName: 'Alice Smith',
  bio: 'Building things at @Acme.',
});
```

## List a member's boards

```ts
const boards = await trello.members.getMemberBoards({
  id: 'me',
  filter: 'open',
});
```

## List a member's cards

```ts
const cards = await trello.members.getMemberCards({ id: 'me' });
```

## List notifications

```ts
const unread = await trello.members.getMemberNotifications({
  id: 'me',
  filter: 'unread',
  limit: 50,
});
```

## Star a board (pin to sidebar)

```ts
const star = await trello.members.starBoard({
  id: 'me',
  idBoard: boardId,
  pos: 'top',
});

await trello.members.unstarBoard({ id: 'me', idBoardStar: star.id });
```

## Saved searches

```ts
await trello.members.createMemberSavedSearch({
  id: 'me',
  name: 'My open bugs',
  query: '@me label:"bug" -is:archived',
  pos: 'bottom',
});

const searches = await trello.members.getMemberSavedSearches({ id: 'me' });
```

## Notification channel preferences

```ts
await trello.members.updateMemberNotificationChannelSettings({
  id: 'me',
  notificationKey: 'cardDueSoon',
  blocked: false,
});
```

## Upload an avatar

```ts
await trello.members.uploadMemberAvatar({
  id: 'me',
  file: avatarBlob, // Blob, File, or AttachmentInput
});
```
