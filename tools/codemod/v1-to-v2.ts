/**
 * trello.js v1 → v2 codemod.
 *
 * Transforms it can apply safely:
 *   1. `import { TrelloClient } from 'trello.js'` → `import { createTrelloClient } from 'trello.js'`
 *      (handles aliased imports: `import { TrelloClient as TC }` → `import { createTrelloClient as TC }`)
 *   2. `new TrelloClient(args)` → `createTrelloClient(args)` (resolves the local binding from the import)
 *   3. Within those factory calls: `key:` → `apiKey:`, `token:` → `apiToken:`
 *
 * Manual changes the codemod does NOT attempt (and instead warns about):
 *   - `BaseClient` subclassing — the inheritance model is gone; rewrite as `createClient` + namespace function calls.
 *   - `trello.js/out/api` imports (`Boards`, `Members`, etc.) — switch to subpath imports like `trello.js/boards`.
 *
 * Usage:
 *   npx jscodeshift -t tools/codemod/v1-to-v2.ts --parser tsx --extensions ts,tsx ./src
 */
import type {
  API,
  FileInfo,
  ImportDeclaration,
  ImportSpecifier,
  NewExpression,
  ObjectExpression,
  ObjectProperty,
  Property,
  Transform,
} from 'jscodeshift';

const MIGRATION_URL = 'https://mrrefactoring.github.io/trello.js/migration/v1-to-v2';

const transform: Transform = (file: FileInfo, api: API): string => {
  const j = api.jscodeshift;
  const root = j(file.source);
  let dirty = false;
  const warnings: string[] = [];

  /**
   * Map of `oldLocalName → newLocalName` for every `TrelloClient` import we touched.
   * - Canonical: `TrelloClient` → `createTrelloClient`
   * - Aliased:   `TC` → `TC` (only the imported name changes, local stays)
   */
  const localRename = new Map<string, string>();

  // ─── 1. Rewrite imports from 'trello.js' ─────────────────────────────────
  root
    .find(j.ImportDeclaration, { source: { value: 'trello.js' } })
    .forEach((path) => {
      const node = path.node as ImportDeclaration;
      for (const spec of node.specifiers ?? []) {
        if (
          j.ImportSpecifier.check(spec) &&
          spec.imported &&
          spec.imported.name === 'TrelloClient'
        ) {
          const importSpec = spec as ImportSpecifier;
          const oldLocal = importSpec.local ? importSpec.local.name : 'TrelloClient';
          importSpec.imported = j.identifier('createTrelloClient');

          // Only rename the local binding if user didn't alias it.
          if (!importSpec.local || importSpec.local.name === 'TrelloClient') {
            importSpec.local = j.identifier('createTrelloClient');
            localRename.set(oldLocal, 'createTrelloClient');
          } else {
            localRename.set(oldLocal, oldLocal);
          }
          dirty = true;
        }

        if (
          j.ImportSpecifier.check(spec) &&
          spec.imported &&
          spec.imported.name === 'BaseClient'
        ) {
          warnings.push(
            `${file.path}:${node.loc?.start.line ?? '?'}: 'BaseClient' is removed in v2. ` +
              `Replace subclassing with \`createClient\` from 'trello.js/base' plus per-namespace function imports. ` +
              `See ${MIGRATION_URL}`,
          );
        }
      }
    });

  // ─── 2. `new <oldLocal>(args)` → `<newLocal>(args)` ──────────────────────
  if (localRename.size > 0) {
    root
      .find(j.NewExpression)
      .filter((p) => {
        const node = p.node as NewExpression;
        return j.Identifier.check(node.callee) && localRename.has(node.callee.name);
      })
      .replaceWith((p) => {
        const node = p.node as NewExpression;
        const oldName = (node.callee as { name: string }).name;
        const newName = localRename.get(oldName)!;
        return j.callExpression(j.identifier(newName), node.arguments);
      });

    // ─── 3. Rename `key`/`token` keys inside those factory calls ───────────
    const newLocalNames = new Set(localRename.values());
    root
      .find(j.CallExpression)
      .filter((p) => j.Identifier.check(p.node.callee) && newLocalNames.has(p.node.callee.name))
      .forEach((p) => {
        const arg = p.node.arguments[0];
        if (!arg || !j.ObjectExpression.check(arg)) return;
        const obj = arg as ObjectExpression;
        for (const prop of obj.properties ?? []) {
          if (!j.ObjectProperty.check(prop) && !j.Property.check(prop)) continue;
          const property = prop as ObjectProperty | Property;
          const key = property.key;
          let name: string | null = null;
          if (j.Identifier.check(key)) name = key.name;
          else if (j.Literal.check(key) && typeof key.value === 'string') name = key.value;

          if (name === 'key') {
            property.key = j.identifier('apiKey');
            if ('shorthand' in property && property.shorthand) property.shorthand = false;
            dirty = true;
          } else if (name === 'token') {
            property.key = j.identifier('apiToken');
            if ('shorthand' in property && property.shorthand) property.shorthand = false;
            dirty = true;
          }
        }
      });
  }

  // ─── 4. Flag patterns the codemod can't safely rewrite ───────────────────
  root
    .find(j.ImportDeclaration, { source: { value: 'trello.js/out/api' } })
    .forEach((path) => {
      const node = path.node as ImportDeclaration;
      const names = (node.specifiers ?? [])
        .filter((s): s is ImportSpecifier => j.ImportSpecifier.check(s) && !!s.imported)
        .map((s) => s.imported.name)
        .join(', ');
      warnings.push(
        `${file.path}:${node.loc?.start.line ?? '?'}: 'trello.js/out/api' is gone in v2. ` +
          `Import { ${names} } as subpath modules instead: \`import { getBoard } from 'trello.js/boards'\` etc. ` +
          `See ${MIGRATION_URL}`,
      );
    });

  if (warnings.length > 0) {
    for (const w of warnings) console.warn(`[trello.js codemod] ${w}`);
  }

  return dirty ? root.toSource({ quote: 'single' }) : file.source;
};

export default transform;
export const parser = 'tsx';
