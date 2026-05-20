# Trello.js changelog

## Unreleased

### Internal

- Build scripts (`scripts/build-og-image`, `scripts/copy-api-to-ru`) migrated from `.mjs` to TypeScript, executed via `tsx`. `tsx` added as a dev dependency.
- `repository.url` switched to the canonical `git+https://` form so the npm package page can auto-link Issues and Pull Requests against the GitHub repo.
- npm `description` and `keywords` reworked for discoverability: leads with "type-safe", names Zod 4 explicitly, mentions checklists, and adds high-intent keywords (`javascript`, `nodejs`, `browser`, `atlassian-trello`, `trello-board`, `trello-card`). GitHub repo description and topics aligned to match.
- Regenerated `src/api`, `src/models`, `src/parameters` from the latest Trello OpenAPI spec via `apis-code-gen`. No public-API changes.
- `apiObject` re-exported from `#/core` so generated modules can import it from the barrel.
- JSDoc links to the Trello developer docs rewritten from site-relative (`/cloud/trello/...`) to absolute (`https://developer.atlassian.com/cloud/trello/...`) so they're clickable from IDEs and typedoc.

## v2.0.0 (2026-05-19)

A substantial rewrite. The public surface changed in several places — see the [v1 → v2 migration guide](https://mrrefactoring.github.io/trello.js/migration/v1-to-v2) for upgrade steps.

### Breaking

- **Client construction**: `new TrelloClient({ key, token })` → `createTrelloClient({ apiKey, apiToken })`. The class form is gone — replaced by a factory function.
- **Tree-shaking imports**: `BaseClient` and the `trello.js/out/api` subpath are removed. Use `createClient` from `trello.js/core` plus per-namespace subpath imports (`trello.js/boards`, `trello.js/cards`, …).
- **Module system**: package is now ESM-only (`"type": "module"`). No CJS build is shipped. Consumers must use `"type": "module"` or a bundler.
- **Node baseline**: minimum Node.js **22**.
- **Zod 4**: dependency upgraded from `zod@3` to `zod@4`. `ZodTypeDef` was removed in Zod 4 — if you typed schemas manually with `ZodType<T, ZodTypeDef, unknown>`, switch to `ZodType<T>`.
- **TypeScript 6**: built with TypeScript 6, `verbatimModuleSyntax`, `stripInternal`.
- **Removed phantom `applications` namespace** that was previously listed but never implemented.

### Added

- **Subpath exports** for every namespace — `trello.js/core`, `trello.js/actions`, `trello.js/batch`, `trello.js/boards`, `trello.js/cards`, `trello.js/checklists`, `trello.js/customFields`, `trello.js/emoji`, `trello.js/enterprises`, `trello.js/labels`, `trello.js/lists`, `trello.js/members`, `trello.js/notifications`, `trello.js/organizations`, `trello.js/plugins`, `trello.js/search`, `trello.js/tokens`, `trello.js/webhooks`. Bundlers tree-shake unused namespaces.
- **Runtime response validation** via Zod 4 schemas on every successful response. Drift between docs and reality surfaces as `ZodError` at the call site instead of silently corrupted data.
- **Automatic 429 retry** with exponential backoff (2 s, 4 s, 8 s, then a final attempt).
- **Documentation site** at <https://mrrefactoring.github.io/trello.js/> — guides, recipes, full API reference, English + Russian.
- **Test suite** — 71 unit tests (covering `createClient`, `buildUrl`, public API contract snapshot, codemod, actions-list query params) plus live integration tests for boards, cards, search, webhooks, organizations, plugins, tokens.
- **`"files": ["dist", "CHANGELOG.md"]`** in `package.json` — restricts npm tarball contents (previously leaked `.claude/settings.local.json`, `.prettierrc`).
- **`"publishConfig"`** with `access: public` and `provenance: true`.

### Fixed

- `search.search` return type — Trello returns `{cards, boards, members, organizations}`, not a flat array.
- `organizations.createOrganization`, `getOrganizationMembership`, `createOrganizationTag`, `updateOrganizationMember`, `deactivateOrganizationMember`, `uploadOrganizationLogo`, `updateOrganizationMembers` return types corrected.
- `plugins.getPluginMemberPrivacyCompliance` typed as `void` (was `unknown`).
- `tokens.updateTokenWebhook` typed as `void`.
- `*Field` endpoints (`getActionField`, `getBoardField`, `getCardField`, `getChecklistField`, `getMemberField`, `getNotificationField`, `getOrganizationField`, `getWebhookField`) return a generic `FieldValue<T>` (`{ _value: T }`) — previously some discarded the response body (`void`) or were typed as the full entity.
- Response schemas reconciled with the live API: every entity always carries a required `id`; nullability is now precise — fields the API genuinely returns as `null` are typed `T | null | undefined`, the rest are just `T | undefined` (no spurious `null` in the type); corrected field types on `Member`, `Board`, `Checklist`, `CheckItem`, `Emoji`, `Memberships`, and several enums (`avatarSource`, `loginTypes`, `permissionLevel`, `voting`, `modelType`); added many real response fields the swagger omitted (`Board`/`Card`/`Member`/`Organization`/`Prefs` and more).

### Internal

- All API/model/parameter source is now generated from the Trello OpenAPI spec — generated directories should not be hand-edited.
- Response object schemas strip unknown keys by default, so a new field added by the Trello API never breaks validation. Setting `TRELLO_STRICT_SCHEMAS=true` switches them to strict mode (`pnpm audit:schemas`) — undocumented keys then raise a `ZodError`, used to surface gaps between the schemas and the live API.
- Stronger typing of nested data: shared shapes (`Limits`, `LimitValue`, `ImageDescriptor`, `SwitcherView`) are extracted into reusable schemas, and previously untyped `limits`, image-scaled arrays, plugin metadata, board prefs and similar objects are now fully typed instead of loose records.
- Removed runtime dependency on `tslib` and `axios`.
- Test framework migrated from `ava` to `vitest`.
- ESLint config consolidated; flat config (`eslint.config.ts`).

## v1.2.8 (2025-04-21)

- Fixes
  - Fixed return type interface for the following methods:
    - `boards.getBoardCustomFields`
    - `customFields.createCustomField`
    - `customFields.getCustomField`
    - `customFields.updateCustomField`

    **Thanks to** [FiliRezGelly](https://github.com/FiliRezGelly) for the fix in PR [#28](https://github.com/MrRefactoring/trello.js/pull/28).

## v1.2.7

- [#25](https://github.com/MrRefactoring/trello.js/issues/25): `before` and `since` parameters added to `getMemberActions` endpoint.

## v1.2.5

- Badge fix
- Dependencies updated

## v1.2.4

- Dependencies updated

## v1.2.3

- Dependencies updated

## v1.2.2

- Dependencies updated

## v1.2.1

- Card attachments fixed (now possible to attach images and large files)
- Typings improved
- Migration to AVA test framework
