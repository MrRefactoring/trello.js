---
title: Webhooks Recipe — trello.js
description: Create, list, pause, and delete Trello webhooks. Receive callbacks, verify HMAC signatures, handle retries. Type-safe trello.js examples.
---

# Webhooks

Webhooks notify your service whenever something changes on a Trello object (board, card, list, member). Trello sends a POST to your callback URL.

## Create a webhook

```ts
const webhook = await trello.webhooks.createWebhook({
  idModel: boardId,
  callbackURL: 'https://my-app.example.com/trello/hook',
  description: 'Board activity stream',
  active: true,
});
console.log(webhook.id);
```

::: warning Callback URL must be reachable
Trello validates the callback URL with a `HEAD` request **at creation time**. It must respond `200` for the webhook to be saved. If your endpoint isn't up yet, the call fails.
:::

## List a token's webhooks

```ts
const all = await trello.tokens.getTokenWebhooks({ token: process.env.TRELLO_TOKEN! });
```

The Trello API surfaces webhooks under the token that created them, not under the model.

## Pause and resume

```ts
await trello.webhooks.updateWebhook({ id: webhook.id, active: false });
// ... later
await trello.webhooks.updateWebhook({ id: webhook.id, active: true });
```

## Delete a webhook

```ts
await trello.webhooks.deleteWebhook({ id: webhook.id });
```

## Receiving callbacks

When something happens on the watched model, Trello sends a POST with this body shape:

```json
{
  "action": { "type": "updateCard", "data": { ... }, "memberCreator": { ... } },
  "model":  { "id": "...", "name": "...", ... }
}
```

Verify the signature using the `X-Trello-Webhook` header — see Trello's [webhook docs](https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/) for the HMAC algorithm.

A minimal Express handler:

```ts
app.head('/trello/hook', (_req, res) => res.sendStatus(200));
app.post('/trello/hook', express.json(), (req, res) => {
  // verify signature here
  const { action, model } = req.body;
  console.log(action.type, 'on', model.id);
  res.sendStatus(200);
});
```

Respond `200` quickly. Trello retries on non-2xx with exponential backoff, then disables the webhook after repeated failures.
