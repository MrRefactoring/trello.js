# trello.js v1 → v2 codemod

Automates the common parts of the v1 → v2 migration with AST-based rewrites (powered by [jscodeshift](https://github.com/facebook/jscodeshift)).

## What it does

| # | Transform             | Before                                     | After                                            |
|---|-----------------------|--------------------------------------------|--------------------------------------------------|
| 1 | Import rename         | `import { TrelloClient } from 'trello.js'` | `import { createTrelloClient } from 'trello.js'` |
| 2 | Constructor → factory | `new TrelloClient({...})`                  | `createTrelloClient({...})`                      |
| 3 | Config key rename     | `{ key, token }`                           | `{ apiKey, apiToken }`                           |

It also detects (and prints a warning for, but does **not** rewrite):
- Imports of the removed `BaseClient` class
- Imports from `'trello.js/out/api'` — the path is gone in v2

These cases require structural decisions only you can make. See the [migration guide](https://mrrefactoring.github.io/trello.js/migration/v1-to-v2) for manual steps.

## Run it

From the root of your v1 project:

```bash
npx jscodeshift \
  -t https://raw.githubusercontent.com/MrRefactoring/trello.js/master/tools/codemod/v1-to-v2.ts \
  --parser tsx \
  --extensions ts,tsx,js,jsx \
  ./src
```

Or, if you've cloned the repo:

```bash
npx jscodeshift -t tools/codemod/v1-to-v2.ts --parser tsx --extensions ts,tsx ./your-project/src
```

### Useful flags

- `--dry --print` — preview changes without writing
- `--verbose=2` — see every file touched
- `--ignore-pattern '**/node_modules/**'` — speed up large repos

## Aliased imports

Aliases are preserved:

```ts
// Before
import { TrelloClient as TC } from 'trello.js';
const client = new TC({ key, token });

// After
import { createTrelloClient as TC } from 'trello.js';
const client = TC({ apiKey: key, apiToken: token });
```

## What's left to do manually

After the codemod, hand-check the following:

1. **`BaseClient` subclasses** — replace with `createClient` from `trello.js/base` plus per-namespace function imports. Example:

   ```ts
   // Before (v1)
   import { BaseClient } from 'trello.js';
   import { Boards, Members } from 'trello.js/out/api';

   class CustomClient extends BaseClient {
     boards = new Boards(this);
     members = new Members(this);
   }

   // After (v2)
   import { createClient } from 'trello.js/base';
   import * as boards from 'trello.js/boards';
   import * as members from 'trello.js/members';

   const client = createClient({ apiKey, apiToken });
   // call boards.getBoard(client, {...}), members.getMember(client, {...})
   ```

2. **`trello.js/out/api` subpath imports** — switch to per-namespace subpaths like `trello.js/boards`, `trello.js/cards`. The codemod warns about every occurrence with a file:line and link.

3. **Node version** — ensure your project runs on Node 22+.

4. **ESM** — set `"type": "module"` in `package.json` (or use a bundler).

## Verifying

After running the codemod:

```bash
# Type-check picks up most remaining issues
npx tsc --noEmit

# Or run your tests
npm test
```

## Caveats

- The transform only renames `key`/`token` inside `TrelloClient`/`createTrelloClient` argument objects. Objects with those keys in unrelated places are left alone.
- Shorthand properties (`{ key, token }`) expand to `{ apiKey: key, apiToken: token }` — the variable names don't change, only the property keys.
- The codemod doesn't insert or change `"type": "module"` in your `package.json` — that's project-level configuration.

## Contributing

Tests live in `tests/unit/codemod/v1-to-v2.test.ts`. Run with `pnpm vitest run tests/unit/codemod`. Add a new `it()` block for any edge case you find.
