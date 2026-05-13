---
title: Tree-Shaking — trello.js
description: Use subpath imports like trello.js/boards to keep your bundle small. ESM-only, sideEffects-free, per-namespace exports.
---

# Tree-Shaking

`trello.js` is built ESM-only and ships subpath exports for every namespace. Bundlers can drop everything you don't use.

## How it works

The package declares one entry per namespace in its `exports` map:

```jsonc
{
  "exports": {
    ".":             "./dist/index.js",
    "./models":      "./dist/models/index.js",
    "./parameters":  "./dist/parameters/index.js",
    "./core":        "./dist/core/index.js",
    "./boards":      "./dist/api/boards.js",
    "./cards":       "./dist/api/cards.js",
    "./webhooks":    "./dist/api/webhooks.js"
    // ...one per namespace
  }
}
```

Each namespace file imports only its own dependencies. Importing one does not pull in the others.

## Two patterns

### Pattern 1: full client (simple, larger bundle)

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({ apiKey, apiToken });
await trello.boards.getBoard({ id });
await trello.cards.createCard({ idList, name: 'Hi' });
```

This pattern is fine for scripts and servers — the entire client is wired up.

### Pattern 2: surgical imports (smallest possible bundle)

```ts
import { createClient } from 'trello.js/core';
import { getBoard, createBoard } from 'trello.js/boards';
import { createCard } from 'trello.js/cards';

const client = createClient({ apiKey, apiToken });
const board = await getBoard(client, { id });
const card = await createCard(client, { idList: board.idLists?.[0], name: 'Hi' });
```

Only `boards.js`, `cards.js`, and `core/` end up in the bundle. Everything else is gone.

## Subpath list

```
trello.js                  // unified client + all namespaces
trello.js/core             // createClient, buildUrl, types
trello.js/models           // Zod schemas + TypeScript types for all models
trello.js/parameters       // parameter types for all endpoints
trello.js/actions
trello.js/batch
trello.js/boards
trello.js/cards
trello.js/checklists
trello.js/customFields
trello.js/emoji
trello.js/enterprises
trello.js/labels
trello.js/lists
trello.js/members
trello.js/notifications
trello.js/organizations
trello.js/plugins
trello.js/search
trello.js/tokens
trello.js/webhooks
```

## Verify it worked

After bundling, search the output for a function you don't use (e.g. `getEnterprise`). It should be absent. If it isn't, your bundler is not seeing the ESM exports — check that you're not unintentionally going through a CJS shim, and that `sideEffects: false` is respected.
