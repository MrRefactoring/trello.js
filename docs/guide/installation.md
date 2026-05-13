---
title: Installation — trello.js
description: Install trello.js via pnpm, npm, or yarn. Requires Node.js 22+ and an ESM project. Works with Vite, webpack, Rollup, esbuild.
---

# Installation

## Package manager

```bash
pnpm add trello.js
# or
npm install trello.js
# or
yarn add trello.js
```

## Requirements

| What | Minimum |
|---|---|
| Node.js | 22 |
| Module system | ESM only (`"type": "module"` or a bundler) |
| TypeScript | 5.0 recommended (5.6+ if you want `verbatimModuleSyntax`) |

The only runtime dependency is `zod` (^4).

## Project setup

If you're starting a fresh Node.js project, your `package.json` should include:

```json
{
  "type": "module",
  "engines": { "node": ">=22" }
}
```

For TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true
  }
}
```

`module: "NodeNext"` requires `.js` extensions on relative imports. If that's not what you want, use `module: "ESNext"` with `moduleResolution: "bundler"` — that's what `trello.js` itself uses.

## CommonJS / older Node

Not supported. `trello.js@2.x` is ESM-only and requires Node 22. If you're stuck on older infrastructure, pin to `trello.js@1.x` — but it is no longer maintained.

## Browser

Works in modern browsers via any bundler (Vite, webpack 5+, Rollup, esbuild). The package is `sideEffects: false` so tree-shaking strips unused namespaces.

## Verify

```bash
node --eval "import('trello.js').then(m => console.log(typeof m.createTrelloClient))"
```

Should print `function`.
