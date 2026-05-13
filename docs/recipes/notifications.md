---
title: Notifications Recipe — trello.js
description: Read Trello notifications, mark all read, toggle unread status, navigate to the related board or card. Type-safe trello.js snippets.
---

# Notifications

Notifications are personal — they belong to a specific member. You don't list "all" notifications; you list a member's notifications.

## List your notifications

```ts
const unread = await trello.members.getMemberNotifications({
  id: 'me',
  filter: 'unread',
  limit: 50,
});
```

`filter` accepts a comma-separated list of notification types (e.g. `mentionedOnCard,addedToCard,changeCard`) or `'all'`.

## Get a single notification

```ts
const n = await trello.notifications.getNotification({ id: notificationId });
console.log(n.type, n.date, n.data);
```

## Mark all notifications as read

```ts
await trello.notifications.markAllNotificationsRead({});
```

## Toggle a single notification's unread state

```ts
await trello.notifications.updateNotificationUnreadStatus({
  id: notificationId,
  unread: false,
});
```

## Navigate to the related entity

```ts
const board = await trello.notifications.getNotificationBoard({ id: notificationId });
const card  = await trello.notifications.getNotificationCard({ id: notificationId });
const list  = await trello.notifications.getNotificationList({ id: notificationId });
const member = await trello.notifications.getNotificationMember({ id: notificationId });
const creator = await trello.notifications.getNotificationCreator({ id: notificationId });
```

## Polling pattern

Trello doesn't push notifications via REST — you poll. Combine with `since` to fetch only new ones:

```ts
let cursor: string | undefined;

setInterval(async () => {
  const items = await trello.members.getMemberNotifications({
    id: 'me',
    filter: 'all',
    limit: 20,
    since: cursor,
  });
  if (items.length > 0) {
    cursor = items[0].id; // newest first
    items.forEach(handleNotification);
  }
}, 30_000);
```

For real-time updates use [webhooks](/recipes/webhooks) instead.
