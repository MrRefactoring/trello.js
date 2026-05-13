---
title: Getting Started with trello.js
description: Install trello.js, get your Trello API key and token, and make your first request in under a minute. Type-safe, ESM-only, validated by Zod.
---

# Getting Started

`trello.js` is a type-safe Trello REST API client for Node.js and browsers. It covers every public endpoint, validates every response with Zod, and is fully tree-shakable.

## Install

```bash
pnpm add trello.js
# or: npm install trello.js
# or: yarn add trello.js
```

Requires **Node.js 22+**. The package is ESM-only — your project must have `"type": "module"` (or you must use a bundler).

## Get your credentials

You'll need a Trello API key and a token:

1. Go to [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin) and create a Power-Up to obtain an **API key**.
2. Use the "manually generate a Token" link on the same page to get a **token** scoped to your account.

Store them in environment variables; never commit them to source control.

## First request

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});

const me = await trello.members.getMember({ id: 'me' });
console.log(`Hello, ${me.fullName}`);
```

That's the whole "hello world". If it printed your name, you're set.

## What's next

- [Authentication](./authentication) — details on tokens, scopes, lifetimes
- [Tree-Shaking](./tree-shaking) — keep your bundle minimal
- [Error Handling](./error-handling) — what failures look like
- [Recipes](/recipes/boards) — common patterns for boards, cards, search, webhooks
- [API Reference](/api/) — every method, generated from source
