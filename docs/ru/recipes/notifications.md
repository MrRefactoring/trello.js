---
title: Уведомления — trello.js
description: Чтение уведомлений Trello, mark all read, переключение unread, навигация к связанной доске или карточке.
---

# Уведомления

Уведомления персональные — принадлежат конкретному участнику. Нельзя получить «все» уведомления, только уведомления конкретного участника.

## Список своих уведомлений

```ts
const unread = await trello.members.getMemberNotifications({
  id: 'me',
  filter: 'unread',
  limit: 50,
});
```

`filter` принимает список типов через запятую (например `mentionedOnCard,addedToCard,changeCard`) или `'all'`.

## Получение одного уведомления

```ts
const n = await trello.notifications.getNotification({ id: notificationId });
console.log(n.type, n.date, n.data);
```

## Пометить все уведомления прочитанными

```ts
await trello.notifications.markAllNotificationsRead({});
```

## Переключение unread-статуса одного уведомления

```ts
await trello.notifications.updateNotificationUnreadStatus({
  id: notificationId,
  unread: false,
});
```

## Навигация к связанной сущности

```ts
const board = await trello.notifications.getNotificationBoard({ id: notificationId });
const card  = await trello.notifications.getNotificationCard({ id: notificationId });
const list  = await trello.notifications.getNotificationList({ id: notificationId });
const member = await trello.notifications.getNotificationMember({ id: notificationId });
const creator = await trello.notifications.getNotificationCreator({ id: notificationId });
```

## Паттерн поллинга

Trello не пушит уведомления через REST — нужен опрос. Комбинируйте с `since`, чтобы получать только новые:

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

Для real-time обновлений используйте [webhooks](/ru/recipes/webhooks).
