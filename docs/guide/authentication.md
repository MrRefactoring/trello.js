---
title: Authentication — trello.js
description: Get a Trello API key and token, configure your trello.js client, and authorise end users via OAuth-style redirect.
---

# Authentication

The Trello REST API uses two credentials: an **API key** and a **token**.

## Get the key

The API key identifies your application. It is **public** — meant to be embedded in a Power-Up or shipped client code.

1. Visit [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. Create a new Power-Up (or open an existing one)
3. Open the "API Key" tab — your key is shown there

## Get a token

A token authorises the API key to act on behalf of a specific Trello user.

- **For development**, click the "manually generate a Token" link next to your key. Trello will ask you to authorise — the resulting token is scoped to your own account, with full read/write access, and never expires.
- **For end-user authorisation**, send the user to:
  ```
  https://trello.com/1/authorize?
    expiration=never&
    name=YourApp&
    scope=read,write&
    response_type=token&
    key=YOUR_KEY
  ```
  Trello redirects back with the token in the URL fragment.

## Use them with the client

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});
```

Every request automatically receives `key=…&token=…` query parameters. You never have to add them by hand.

## Security checklist

- The **token** is sensitive — treat it like a password. Never commit it.
- Use `.env` files in development; secret managers in production.
- Rotate the token if you suspect leakage — Trello lets you revoke tokens at [trello.com/account](https://trello.com/account) under "Power-Ups and integrations".
- Scope tokens to `read` only when write access is not needed.

## Custom host (proxies, mocking)

```ts
const trello = createTrelloClient({
  apiKey: '...',
  apiToken: '...',
  host: 'https://my-proxy.example.com/trello/1',
});
```

Useful for testing or for routing through an internal egress proxy.

## Custom headers

```ts
const trello = createTrelloClient({
  apiKey: '...',
  apiToken: '...',
  headers: { 'X-Request-Id': 'abc123' },
});
```

These headers are merged into every request.
