---
title: Migration v1 → v2 — trello.js
description: Upgrade from trello.js v1 to v2. createTrelloClient factory, apiKey/apiToken renames, ESM-only, Node 22+, subpath exports for tree-shaking.
---

# Migration: v1 → v2

`trello.js@2.0.0` is a substantial rewrite.

## Automated migration

A [jscodeshift codemod](https://github.com/MrRefactoring/trello.js/tree/master/tools/codemod) handles the common cases:

```bash
npx jscodeshift \
  -t https://raw.githubusercontent.com/MrRefactoring/trello.js/master/tools/codemod/v1-to-v2.ts \
  --parser tsx \
  --extensions ts,tsx,js,jsx \
  ./src
```

What it rewrites automatically:

- `import { TrelloClient }` → `import { createTrelloClient }`
- `new TrelloClient({...})` → `createTrelloClient({...})`
- `{ key, token }` → `{ apiKey, apiToken }` inside factory calls

What it flags but **does not rewrite** (manual changes required):

- `BaseClient` subclassing — see "Tree-shaking imports" section below
- `'trello.js/out/api'` imports — see "Tree-shaking imports" section below

Run with `--dry --print` first to preview the diff. This guide covers every breaking change with before/after snippets.

## Module system

**v1**: dual CJS + ESM. **v2**: ESM only.

You must use `"type": "module"` in `package.json` or a bundler. Node 22+ is required.

## Client construction

**v1** (class):

```ts
import { TrelloClient } from 'trello.js';

const client = new TrelloClient({
  key: 'YOUR_KEY',
  token: 'YOUR_TOKEN',
});
```

**v2** (factory):

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: 'YOUR_KEY',
  apiToken: 'YOUR_TOKEN',
});
```

Note: `key` → `apiKey`, `token` → `apiToken`. The `TrelloClient` class is gone.

## Tree-shaking imports

**v1**:

```ts
import { BaseClient } from 'trello.js';
import { Boards, Members } from 'trello.js/out/api';

class CustomTrelloClient extends BaseClient {
  boards = new Boards(this);
  members = new Members(this);
}
```

**v2**:

```ts
import { createClient } from 'trello.js/core';
import { getBoard } from 'trello.js/boards';
import { getMember } from 'trello.js/members';

const client = createClient({ apiKey, apiToken });
await getBoard(client, { id });
await getMember(client, { id: 'me' });
```

The `BaseClient` class, `Boards`/`Members`/etc. classes, and `trello.js/out/api` path are all removed. The new model: a single `Client` interface, plain functions per endpoint, subpath exports per namespace.

## Runtime validation

`v2` parses every successful response through a Zod 4 schema. If Trello returns an unexpected shape, you get a `ZodError` instead of silently corrupted data.

If you import `zod` directly and used `ZodTypeDef`, it was removed in Zod 4 — use `ZodType<Output, Input>` instead.

## Removed `applications` namespace

The `applications` group never existed in the Trello API; it was a documentation artefact. No replacement needed.

## Node version

**v1**: Node 10+. **v2**: Node 22+. No polyfills for `fetch` — Node 18+ has it built in, but the package targets the stricter Node 22 baseline.

## Dependencies

**v1**: 3+ runtime deps (axios, etc.). **v2**: one runtime dep — `zod`. Built-in `fetch` everywhere.

## Tooling-only changes

- Tests, ESLint config, CI workflows were rebuilt.
- `tslib` no longer a runtime dependency.
- Package contents are now restricted by the `"files"` field — only `dist/` and `CHANGELOG.md` are listed explicitly. `README.md` and `LICENSE` are included by npm automatically.

## Quick rename table

| v1                            | v2                                                  |
|-------------------------------|-----------------------------------------------------|
| `new TrelloClient({...})`     | `createTrelloClient({...})`                         |
| `{ key, token }`              | `{ apiKey, apiToken }`                              |
| `BaseClient`                  | `createClient` from `trello.js/core`                |
| `trello.js/out/api` subpath   | `trello.js/<namespace>` (one per group)             |
| `client.boards.getBoard(...)` | `trello.boards.getBoard(...)` (signature unchanged) |
| no validation                 | Zod runtime validation on responses                 |
