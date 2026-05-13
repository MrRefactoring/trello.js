# Live Tests

Integration tests that run against the real Trello API.

## Setup

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   - **API key**: https://trello.com/app-key
   - **API token**: https://trello.com/1/authorize?expiration=never&scope=read,write&response_type=token&key=YOUR_API_KEY

## Running

```bash
pnpm test:live
```

Watch mode (re-runs on file changes):
```bash
pnpm test:live:watch
```

## Safety

- All tests create resources under isolated boards named `[tljs:<run-id>]`.
- Boards are deleted in `afterAll`, even when tests fail.
- Missing credentials (no `.env`) skip all tests without error — CI without secrets is safe.
- Tests are serial (`singleFork: true`) to stay within Trello rate limits.

## Architecture

```
tests/live/
├── setup/
│   ├── env.ts        # env var validation, hasLiveEnv() guard
│   ├── client.ts     # singleton TrelloClient factory, loads .env.live
│   └── resources.ts  # ResourceTracker — LIFO cleanup stack
├── helpers/
│   ├── naming.ts     # testName() generates run-scoped unique names
│   └── poll.ts       # waitFor() — exponential-backoff polling
├── auth.live.test.ts
├── boards.live.test.ts
├── cards.live.test.ts
└── lists.live.test.ts
```

## CI

Live tests run on a separate `live-tests` workflow:
- **Manual trigger**: `workflow_dispatch`
- **Scheduled**: every Monday at 06:00 UTC

They do **not** run on every push to protect against accidental API quota usage.

## Adding new tests

1. Create `tests/live/<feature>.live.test.ts`
2. Guard with `describe.skipIf(!hasLiveEnv())(...)` 
3. Initialize `trello = getLiveClient()` in `beforeAll`
4. Track cleanup with `ResourceTracker`
5. Use `testName(label)` for all resource names
