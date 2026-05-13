---
title: Участники — trello.js
description: Чтение и обновление профиля участника Trello, список досок и карточек, saved searches, настройки уведомлений.
---

# Участники

«Участник» (member) — любой пользователь Trello. Литерал id `'me'` указывает на пользователя, чьим токеном вы сейчас аутентифицированы.

## Получение текущего пользователя

```ts
const me = await trello.members.getMember({ id: 'me' });
console.log(me.fullName, me.email, me.idOrganizations);
```

## Получение конкретного участника

По id или username:

```ts
const alice = await trello.members.getMember({ id: 'alice' });
```

## Обновление своего профиля

```ts
await trello.members.updateMember({
  id: 'me',
  fullName: 'Алиса Смит',
  bio: 'Делаю штуки в @Acme.',
});
```

## Список досок участника

```ts
const boards = await trello.members.getMemberBoards({
  id: 'me',
  filter: 'open',
});
```

## Список карточек участника

```ts
const cards = await trello.members.getMemberCards({ id: 'me' });
```

## Список уведомлений

```ts
const unread = await trello.members.getMemberNotifications({
  id: 'me',
  filter: 'unread',
  limit: 50,
});
```

## Звёздочка на доске (закрепить в sidebar)

```ts
const star = await trello.members.starBoard({
  id: 'me',
  idBoard: boardId,
  pos: 'top',
});

await trello.members.unstarBoard({ id: 'me', idBoardStar: star.id });
```

## Сохранённые поисковые запросы

```ts
await trello.members.createMemberSavedSearch({
  id: 'me',
  name: 'Мои открытые баги',
  query: '@me label:"bug" -is:archived',
  pos: 'bottom',
});

const searches = await trello.members.getMemberSavedSearches({ id: 'me' });
```

## Настройки каналов уведомлений

```ts
await trello.members.updateMemberNotificationChannelSettings({
  id: 'me',
  notificationKey: 'cardDueSoon',
  blocked: false,
});
```

## Загрузка аватара

```ts
await trello.members.uploadMemberAvatar({
  id: 'me',
  file: avatarBlob, // Blob, File или AttachmentInput
});
```
