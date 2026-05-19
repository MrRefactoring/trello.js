# Contributing to trello.js

Thanks for considering a contribution. Quick orientation before you dive in.

## Prerequisites

- Node.js **≥ 22**
- pnpm **11** (the repo declares `packageManager`)
- A Trello API key and token if you intend to run live tests

## Setup

```bash
pnpm install
pnpm run build      # tsc — confirms a clean compile
pnpm run test       # 53 unit tests + live tests if .env.live present
```

## Scripts

| Script | What it does |
|---|---|
| `pnpm run build` | TypeScript build to `dist/` |
| `pnpm run test` | All tests (unit + live) |
| `pnpm vitest run` | Unit tests only |
| `pnpm run test:live` | Live tests against the real Trello API (requires `.env.live`) |
| `pnpm run test:coverage` | Combined coverage report |
| `pnpm run docs:dev` | Serve the docs site locally |
| `pnpm run docs:build` | Build the docs site to `docs/.vitepress/dist` |
| `pnpm run lint` | ESLint |
| `pnpm run code:formatting` | Prettier + ESLint --fix |

## Important: most of `src/` is generated

The following directories are generated from the official Trello OpenAPI spec:

- `src/api/` — per-namespace endpoint functions
- `src/models/` — Zod schemas + types for response bodies
- `src/parameters/` — types for request parameters

**Do not edit these by hand.** They will be overwritten on the next codegen run.

The only hand-maintained code is:

- `src/core/` — `createClient`, `buildUrl`, types
- `src/createTrelloClient.ts` — the unified-client factory
- `tests/` — unit and live tests

## Live tests

Copy `.env.example` to `.env.live`, fill in `TRELLO_KEY`, `TRELLO_TOKEN`, and any other required vars, then:

```bash
pnpm run test:live
```

Live tests use a `ResourceTracker` to clean up after themselves (LIFO order, runs in `afterAll`). Always register cleanup via `tracker.defer(...)` so we don't leak boards.

## PR checklist

- [ ] `pnpm run build` is clean
- [ ] `pnpm vitest run` is green
- [ ] If you touched the public API, the contract snapshot updates (`tests/unit/__snapshots__/createTrelloClient.test.ts.snap`) make sense
- [ ] If you touched docs source, `pnpm run docs:build` succeeds
- [ ] No edits to `src/api/`, `src/models/`, `src/parameters/` (these are generated and will be overwritten)

## License

By submitting a contribution you agree it is licensed under the [MIT License](./LICENSE).
