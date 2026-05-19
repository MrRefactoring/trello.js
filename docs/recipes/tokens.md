---
title: Tokens Recipe — trello.js
description: Inspect a Trello API token, find the associated member, list its webhooks, revoke. Type-safe trello.js snippets.
---

# Tokens

A token is the credential a user grants to your app. Use these endpoints to introspect or revoke a token.

## Get token info

```ts
const info = await trello.tokens.getToken({ token: process.env.TRELLO_TOKEN! });
console.log(info.identifier, info.dateCreated, info.dateExpires);
```

Trello identifies tokens by their string value — there is no opaque token id.

## Get the member associated with a token

```ts
const member = await trello.tokens.getTokenMember({ token: process.env.TRELLO_TOKEN! });
console.log(member.id, member.fullName);
```

Useful if you only have the token and need to know whose it is.

## List the token's webhooks

```ts
const hooks = await trello.tokens.getTokenWebhooks({ token: process.env.TRELLO_TOKEN! });
```

Trello associates webhooks with the token that created them, not with the watched model — so this is how you enumerate all webhooks your app owns.

## Create a webhook through the token

```ts
const hook = await trello.tokens.createTokenWebhook({
  token: process.env.TRELLO_TOKEN!,
  callbackURL: 'https://my-app.example.com/trello/hook',
  idModel: boardId,
  description: 'Activity stream',
});
```

This is equivalent to `webhooks.createWebhook` but routes through the token resource.

## Read / delete a specific token-scoped webhook

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

## Revoke a token

```ts
await trello.tokens.deleteToken({ token: process.env.TRELLO_TOKEN! });
```

The token is immediately invalidated. Any further calls with it will return 401.
