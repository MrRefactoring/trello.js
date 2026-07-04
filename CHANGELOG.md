# Trello.js changelog

## v2.1.5 (2026-07-04)

### Fixed

- `Card.aiMetadata` added to `CardSchema`. The live Trello API now returns this field on `Card` objects (present when a card is created or modified by an agent rather than a human member); it was silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`), breaking every card-returning endpoint — `getCard`, `getActionCard`, `getNotificationCard`, `createCard`, `updateCard`, `getBoardCards`, `getBoardCardsByFilter`, `getListCards`, `getMemberCards`, and `getChecklistCards`.

### Internal

- Dev dependencies bumped: `eslint` 10.5.0 → 10.6.0, `prettier` 3.8.4 → 3.9.4, `tsx` 4.22.4 → 4.22.5, `typescript-eslint` 8.62.0 → 8.62.1, `vite` 8.1.0 → 8.1.3.

## v2.1.4 (2026-06-24)

### Fixed

- `BoardMyPrefs.aiGoogleChatEnabled` added to `BoardMyPrefsSchema`. The live Trello API now returns this field on `BoardMyPrefs` objects; it was silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`), breaking the `myPrefs`-returning board endpoints `updateBoardShowSidebar`, `updateBoardShowSidebarMembers`, `updateBoardShowSidebarBoardActions`, `updateBoardShowSidebarActivity`, `updateBoardEmailPosition`, `updateBoardEmailList`, and `generateBoardEmailKey`.

### Internal

- Dev dependencies bumped: `eslint` 10.4.1 → 10.5.0, `typescript-eslint` 8.60.1 → 8.62.0, `vite` 8.0.16 → 8.1.0, `vitest` / `@vitest/coverage-v8` 4.1.8 → 4.1.9, `prettier` 3.8.3 → 3.8.4, `globals` 17.6.0 → 17.7.0, `@arethetypeswrong/cli` 0.18.3 → 0.18.4, `@types/node` 22.19.20 → 22.20.0.

## v2.1.3 (2026-06-07)

### Fixed

- `Action.agenticIdentity` added to `ActionSchema`. The live Trello API now returns this field on `Action` objects; it was silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`), breaking the action-returning endpoints `getCardActions`, `getListActions`, `getMemberActions`, `getOrganizationActions`, and `createCardComment`.

## v2.1.2 (2026-06-01)

### Fixed

- `Label.idOrganization` and `Label.nodeId` added to `LabelSchema`. The live Trello API returns both fields on every `Label` object; they were silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`).

### Internal

- Live tests (`pnpm test:live`) now always run with `TRELLO_STRICT_SCHEMAS=true`. Previously strict validation was only applied in the daily `pnpm audit:schemas` run, meaning new undocumented API fields could go undetected until the nightly workflow.
- `vite` added as a direct dev dependency at `^8.0.0`. `vitest@4` dropped support for vite 5; without an explicit `vite@8` entry the startup error `ERR_PACKAGE_PATH_NOT_EXPORTED: Package subpath './module-runner' is not defined` blocked all test runs.
- `batch` namespace wiring (`createBatchRunner`) is now emitted directly by `apis-code-gen` via a new `namespaceOverrides` mechanism in the generator config — no manual post-sync patch required.
- `ActionFieldValue` and `CardFieldValue` are now included in the generated API reference (previously suppressed via `intentionallyNotExported` in `typedoc.json`).
- Regenerated `src/api`, `src/models`, `src/parameters` from the latest Trello OpenAPI spec (JSDoc line-wrapping only — no functional changes).

## v2.1.1 (2026-05-31)

### Added

- `skipParsing` client option. When `true`, `schema.parse()` is not called on successful responses — neither Zod validation nor transforms run, so date fields remain plain strings rather than `Date` objects. Defaults to `false`. Use as an escape hatch against schema drift or to skip parsing overhead on large responses.
- Typed enum literals for params whose valid values were listed inline as plain prose — no backticks and no `[fields](...)` doc link — so the previous heuristics skipped them. The colon after `comma-separated list of` is now optional, covering bare-prose descriptions such as `search.organizationFields` ("All or a comma-separated list of billableMemberCount, desc…"). `getBoard.fields` and `search.organizationFields` now accept `z.enum([...])` or an array thereof alongside the free-form `string | string[]`, and their JSDoc renders each valid value as inline code. Loose string branches retained — non-breaking.

### Fixed

- `Card.agent` is now nullable in the response schema. The live API returns `agent: null`, which previously raised `ZodError: expected object, received null` on every endpoint that returns a `Card` or `Card[]` — including `getListCards` and `getBoardCards`, where it surfaced as `path [0, "agent"]`. Closes [#42](https://github.com/MrRefactoring/trello.js/issues/42) — thanks to [@Phyroks](https://github.com/Phyroks) for the detailed report.
- `Card.checkItemStates` is now typed as `CheckItemState[]` (objects with `idCheckItem` and `state`) instead of `string[]`. The live API returns objects here, so `getBoardCards` / `getListCards` could reject with `ZodError: expected string, received object`. Surfaced while adding regression tests for #42.

## v2.1.0 (2026-05-25)

### Added

- The upstream codegen (`apis-code-gen`) now resolves `$ref` schemas in parameter and request-body positions natively — they emit `${X}Schema` references (and imports) instead of falling through to `z.unknown()`. Closes the root cause across the spec; each consumer no longer needs a per-config inlining patch. As a result:
  - **Path-level `id` parameters**: every operation that takes a `{id}` now generates `id: TrelloIDSchema` (imported from `../models`) rather than `id: z.unknown()`. Affects 200+ parameter files.
  - **Top-level `oneOf` schemas** (e.g. `posStringOrNumber: oneOf:[{string,enum:['top','bottom']}, {number}]`) are emitted as proper `z.union([...])` schemas in the models directory. The Trello-specific workaround that flattened `posStringOrNumber` to `z.number()` has been removed.
  - **Path-level shared parameters** are merged into operation-level parameters via the `mergePathParameters` transform so they participate in the normal generation pipeline.
  - **`fields`-style CSV query params** (entities `Action`, `Attachment`, `Board`, `Card`, `Notification`, `Organization`, `Token`): now accept `z.enum([...documented field names...])` or an array thereof in addition to the existing free-form `string | string[]`. Affected: `getAction`, `getActionBoard`, `getActionCard`, `getActionOrganization`, `getBoardLists`, `getCard`, `getCardAttachments`, `getCardBoard`, `getEnterpriseOrganizations`, `getListBoard`, `getMember`, `getMemberBoards`, `getMemberInvitedBoards`, `getMemberInvitedOrganizations`, `getMemberNotifications`, `getMemberOrganizations`, `getNotification`, `getNotificationBoard`, `getNotificationCard`, `getNotificationOrganization`, `getOrganizationBoards`, `getToken`, `deactivateEnterpriseMember`. Entities whose `<Entity>Fields` enum was missing or unusable in the swagger are seeded separately (see the next two bullets).
  - **`fields` params for entities whose swagger enum was missing or truncated** — `List` (shipped as the singleton `['id']`), `Organization` (truncated to `['id', 'name']`), and `Checklist` / `Sticker` / `Label` / `CustomEmoji` (no `<Entity>Fields` schema at all). The `<Entity>Fields` enums are now seeded/created from the corresponding object models (`TrelloList`, `Organization`, `Checklist`, `Label`, `CustomEmoji`) and the documented Sticker object, so these params expose the typed enum as the 4-branch `string | string[] | enum | enum[]` union. New generated models: `ListFieldsSchema` (expanded), `OrganizationFieldsSchema` (expanded), `ChecklistFieldsSchema`, `StickerFieldsSchema`, `LabelFieldsSchema`, `CustomEmojiFieldsSchema`. Affected params include `getList.fields`, `getBoardLists.fields`, `getCardList.fields`, `getActionList.fields`, `getNotificationList.fields`, `getChecklist.fields`, `getCard.checklistFields`/`stickerFields`, `getCardSticker.fields`, `getCardStickers.fields`, `getLabel.fields`, and the organization-`fields` params across `getMember`, `getMemberBoards`, `getMemberOrganizations`, `getMemberInvitedOrganizations`, `getEnterpriseOrganizations`, `getActionOrganization`, `getNotification`, `getNotificationOrganization`, `search`. Loose `string`/`string[]` branches retained — non-breaking.
  - **Member `fields` params**: Trello's swagger ships the `MemberFields` enum as a useless singleton (`['id']`), so every member-`fields` param had degraded to a bare string (or, where the swagger used an explicit `$ref`, to the over-restrictive `MemberFieldsSchema` that accepted only `'id'`). The `MemberFields` enum is now seeded from the [documented member object fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#member-object) (`id`, `avatarHash`, `avatarUrl`, `fullName`, `username`, `initials`, `confirmed`, `idBoards`, `idOrganizations`, …), so all member-`fields` params now expose the typed enum (CSV params as the 4-branch `string | string[] | enum | enum[]` union; the single-value `getMemberField.field` path param as `string | enum`). Affected: `getEnterpriseMembers.fields`, `getBoardMemberships.memberFields`, `getActionMember.fields`, `getActionCreator.fields`, `getCardMembers.fields`, `getCardMembersVoted.fields`, `getNotificationMember.fields`, `getNotificationCreator.fields`, `getTokenMember.fields`, `getMemberField.field`, plus the `memberFields`/`memberCreatorFields`/`memberVotedFields` params on `getAction`, `getCard`, `getMember`, `getMemberNotifications`, `getNotification`. The loose `string`/`string[]` branches are retained, so this is non-breaking and undocumented field names are still accepted.
  - **Inline-backtick CSV query params** ("Comma-separated list of: `a`, `b`, …" / "all or a comma-separated list of: `a`, `b`, …" with the field names listed inline and no `[fields](…)` doc link): now accept `z.enum([…])` or an array thereof alongside the free-form `string | string[]`. Affected: `getEnterprise.fields`, `getCardCheckItemStates.fields`, `search.modelTypes`/`boardFields`/`cardFields`. Interrupting parentheticals in the description (e.g. the pagination caveat on `getEnterprise.fields`) are stripped before extraction.
  - **Single-value `$ref` enums in query and path params**: `Color` (`createLabel.color`, `updateLabel.color`), `ViewFilter` (`getBoardLists.cards`/`filter`, `getBoardListsByFilter.filter`), and the path `field` params on `getActionField`, `getCardField`, `getNotificationField`, `getOrganizationField` now expose `z.union([z.string(), z.enum([...])])`.
  - **Inline-listed JSDoc enums** ("One of: `a`, `b`, `c`" / "Valid values: a, b, c") on plain `string` params: `boardStars`, `getBoardStars.filter`, `getEnterprise.members`/`memberFields`/`memberSortOrder`/`organizations`, `getEnterpriseMembers.count`, `createEnterpriseToken.expiration`, `getBoardField.field`, `getMemberNotifications.readFilter`, `updateBoard.prefs/{permissionLevel,invitations,voting,comments,background,cardAging}`, `updateOrganization.prefs/{boardVisibilityRestrict/*,permissionLevel}`.
  - **Positioning params** (`pos` and friends) — `top`, `bottom`, or a positive number — typed as `z.union([z.string(), z.number(), z.enum(['top', 'bottom'])])` across `createBoardList`, `createCardChecklist`, `createChecklist`, `createChecklistItem`, `createCustomField`, `createCustomFieldOption`, `createMemberSavedSearch`, `starBoard`, `updateCardCheckItem`, `updateCardChecklistItem`, `updateChecklist`, `updateCustomField`, `updateMemberBoardStar`, `updateMemberSavedSearch`. Loose `z.string()` branch kept for backward compatibility with callers that previously passed `z.string()` / `z.unknown()`.
  - **`$ref`-to-enum/primitive-union request body fields** picked up the same treatment, so body-side `pos`/`color`/`idCard`/etc. flow through the same inline expansion instead of `z.unknown()`.
- `POST /checklists.name` JSDoc now documents the server-side default (`**Defaults**: `Checklist``) — verified empirically against the live API.

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
