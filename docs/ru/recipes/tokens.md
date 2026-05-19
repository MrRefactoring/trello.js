---
title: Токены — trello.js
description: Просмотр Trello API токена, поиск связанного участника, список его webhooks, отзыв.
---

# Токены

Токен — credential, который пользователь выдаёт вашему приложению. Эти эндпоинты позволяют его осматривать и отзывать.

## Информация о токене

```ts
const info = await trello.tokens.getToken({ token: process.env.TRELLO_TOKEN! });
console.log(info.identifier, info.dateCreated, info.dateExpires);
```

Trello идентифицирует токены по их строке — opaque token id нет.

## Участник, связанный с токеном

```ts
const member = await trello.tokens.getTokenMember({ token: process.env.TRELLO_TOKEN! });
console.log(member.id, member.fullName);
```

Полезно, когда есть только токен и надо узнать, чей он.

## Список webhooks токена

```ts
const hooks = await trello.tokens.getTokenWebhooks({ token: process.env.TRELLO_TOKEN! });
```

Trello связывает webhooks с токеном, который их создал, а не с отслеживаемой моделью — это единственный способ перечислить все webhooks вашего приложения.

## Создание webhook через токен

```ts
const hook = await trello.tokens.createTokenWebhook({
  token: process.env.TRELLO_TOKEN!,
  callbackURL: 'https://my-app.example.com/trello/hook',
  idModel: boardId,
  description: 'Activity stream',
});
```

Эквивалентно `webhooks.createWebhook`, но идёт через ресурс токена.

## Чтение / удаление token-scope webhook

```ts
const hook = await trello.tokens.getTokenWebhook({
  token: process.env.TRELLO_TOKEN!,
  idWebhook: webhookId,
});

await trello.tokens.deleteTokenWebhook({
  token: process.env.TRELLO_TOKEN!,
  idWebhook: webhookId,
});
```

## Отзыв токена

```ts
await trello.tokens.deleteToken({ token: process.env.TRELLO_TOKEN! });
```

Токен немедленно становится невалидным. Любые последующие вызовы с ним вернут 401.
