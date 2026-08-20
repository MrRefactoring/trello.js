# Trello.js changelog

## v2.2.0 (2026-08-20)

**Read this one if you `switch` exhaustively over a value this client returns.** The enum-shaped types are now open, `Color` and `CardAging` among them, so a `switch` with no `default` branch stops type-checking. That ships in a minor release on purpose: the values belong to Trello, not to this client. The `_light` / `_dark` label shades reached the live API long before the spec named them and broke `getBoardCards` for every consumer until v2.1.6 added the 30 values by hand, so a closed set was never a promise a wrapper could keep.

### Fixed

- `Organization` gained `iconEmoji`, `iconEmojiBackground` and `eligibleForTrial`. The live API returns all three on every workspace; they were silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`), breaking `getMemberOrganizations` and the organization-returning endpoints. `eligibleForTrial` is a boolean; the two icon fields are typed `unknown` because every workspace reachable from this account reports them as `null`, so their populated shape is still unobserved.

### Deprecated

- **`PerformBatch` / `PerformBatchSchema` in `trello.js/parameters` are now aliases of `Run` / `RunSchema`.** Both names describe the same `{ urls: string }` body, both keep the `@deprecated` mark they have carried since v2.1.2, and both go at the next major version. The batch endpoint takes `Run`.

### Added

- **Board exports.** Five endpoints the spec documents and this client did not expose: `createBoardExport`, `getBoardExport`, `getBoardMostRecentExport`, `downloadBoardExport` and `deleteBoardExport`, with matching parameter types.

### Changed

- **Enums generated from the spec are now open.** A string outside the documented list is accepted at runtime instead of raising `ZodError`, because Trello ships values ahead of the spec that names them: the `_light` / `_dark` label shades of the 2023 palette redesign broke `getBoardCards` for every consumer until v2.1.6 added them by hand. The documented values stay in the type, which is now `'green' | 'yellow' | … | (string & {})`, so editors still suggest all of them. Affects 31 model and 104 parameter files, `Color` and `CardAging` among them.

  Consumers who `switch` exhaustively over one of these unions will need a `default` branch: the union is no longer closed.

  `TRELLO_STRICT_SCHEMAS=true` still builds a real `z.enum`, which is how `pnpm audit:schemas` keeps catching a list that has gone stale. The gate matches `apiObject`: open for consumers, closed for the audit.
- `openEnum` is exported from `trello.js/core`.
- `createTrelloClient` and `createClient` now also accept an already-built `Client`, handed straight back. One client can drive both the namespaced facade and the flat tree-shaken functions instead of two that could disagree about the host or `skipParsing`. Passing a `ClientConfig` works exactly as before.
- Four parameters the spec describes as arrays of objects, but the API takes as arrays of scalars, are typed as such instead of `unknown[]`: `fields` on `getCardAttachment` is now `AttachmentFields[]`, and `idOrganizations` on `getEnterpriseBulkOrganizations`, `getEnterpriseBulkTransferrableOrganizations` and `updateEnterpriseJoinRequests` is now `string[]`. Code that passed the right values keeps compiling; code that passed something else now fails at the call site rather than at the API.

### Internal

- Regenerated `src/api`, `src/models`, `src/parameters` from the Trello OpenAPI spec. Beyond the board exports above, the visible changes are `Prefs.backgroundImage` moving to the Zod 4 `z.url()` spelling and JSDoc rewrapping.
- The blank line the generator used to leave between a JSDoc block and the declaration it documents is gone, across all 17 `src/api` modules. It detached the comment from the symbol, so editors and typedoc showed those endpoints undocumented.
- Model files whose names begin with an acronym are now spelled `apiKey.ts`, `apiToken.ts` and `cfValue.ts` rather than `aPIKey.ts`, `aPIToken.ts` and `cFValue.ts`. Internal only: the exported `APIKey`, `APIToken` and `CFValue` names are unchanged, and neither file was ever reachable as a subpath import.
- Dev dependencies bumped: `eslint` 10.6.0 → 10.8.1, `typescript-eslint` 8.62.1 → 8.67.0, `vitest` / `@vitest/coverage-v8` 4.1.9 → 4.1.11, `vite` 8.1.3 → 8.2.1, `prettier` 3.9.4 → 3.9.6, `tsx` 4.22.5 → 4.23.12, `tsc-alias` 1.8.17 → 1.9.2, `jscodeshift` 17.3.0 → 17.4.0, `typedoc` 0.28.19 → 0.28.20, `globals` 17.7.0 → 17.11.0, `@arethetypeswrong/cli` 0.18.4 → 0.18.5, `@types/node` 22.20.0 → 22.20.1, `pnpm` 11.5.2 → 11.17.0.

## v2.1.6 (2026-07-05)

### Fixed

- `Card.dueReminder` is now typed as `number` instead of `string`. The live Trello API returns this field as a number (minutes before the due date), so every card-returning endpoint could reject with `ZodError: expected string, received number`, which surfaced on `getBoardCards` / `getListCards` as `path [n, "dueReminder"]`. Now matches the already-correct `CheckItem.dueReminder`.
- `ColorSchema` now accepts the `_light` / `_dark` shade variants (e.g. `sky_dark`, `green_light`). The documented palette is 10 base colors, but the live API also returns the shade variants introduced in the May 2023 label redesign (30 values total); a label using one raised `ZodError: invalid_value` on `labels[].color`, breaking `getBoardCards` / `getListCards`. Closes [#48](https://github.com/MrRefactoring/trello.js/issues/48). Thanks to [@sampgoes97-ux](https://github.com/sampgoes97-ux) for the detailed report.

## v2.1.5 (2026-07-04)

### Fixed

- `Card.aiMetadata` added to `CardSchema`. The live Trello API now returns this field on `Card` objects (present when a card is created or modified by an agent rather than a human member); it was silently stripped in normal mode and raised `ZodError: unrecognized_keys` in strict/audit mode (`pnpm audit:schemas`), breaking every card-returning endpoint: `getCard`, `getActionCard`, `getNotificationCard`, `createCard`, `updateCard`, `getBoardCards`, `getBoardCardsByFilter`, `getListCards`, `getMemberCards`, and `getChecklistCards`.

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
- `batch` namespace wiring (`createBatchRunner`) is now emitted directly by the code generator, so the manual post-sync patch is no longer needed.
- `ActionFieldValue` and `CardFieldValue` are now included in the generated API reference (previously suppressed via `intentionallyNotExported` in `typedoc.json`).
- Regenerated `src/api`, `src/models`, `src/parameters` from the latest Trello OpenAPI spec (JSDoc line-wrapping only, with no functional changes).

## v2.1.1 (2026-05-31)

### Added

- `skipParsing` client option. When `true`, `schema.parse()` is not called on successful responses: neither Zod validation nor transforms run, so date fields remain plain strings rather than `Date` objects. Defaults to `false`. Use as an escape hatch against schema drift or to skip parsing overhead on large responses.
- Typed enum literals for params whose valid values were listed inline as plain prose, without backticks and without a `[fields](...)` doc link, so the previous heuristics skipped them. The colon after `comma-separated list of` is now optional, covering bare-prose descriptions such as `search.organizationFields` ("All or a comma-separated list of billableMemberCount, desc…"). `getBoard.fields` and `search.organizationFields` now accept `z.enum([...])` or an array thereof alongside the free-form `string | string[]`, and their JSDoc renders each valid value as inline code. The loose string branches are retained, so this is not a breaking change.

### Fixed

- `Card.agent` is now nullable in the response schema. The live API returns `agent: null`, which previously raised `ZodError: expected object, received null` on every endpoint that returns a `Card` or `Card[]`, including `getListCards` and `getBoardCards`, where it surfaced as `path [0, "agent"]`. Closes [#42](https://github.com/MrRefactoring/trello.js/issues/42). Thanks to [@Phyroks](https://github.com/Phyroks) for the detailed report.
- `Card.checkItemStates` is now typed as `CheckItemState[]` (objects with `idCheckItem` and `state`) instead of `string[]`. The live API returns objects here, so `getBoardCards` / `getListCards` could reject with `ZodError: expected string, received object`. Surfaced while adding regression tests for #42.

## v2.1.0 (2026-05-25)

### Added

- The code generator now resolves `$ref` schemas in parameter and request-body positions natively: they emit `${X}Schema` references (and imports) instead of falling through to `z.unknown()`. Closes the root cause across the spec. As a result:
  - **Path-level `id` parameters**: every operation that takes a `{id}` now generates `id: TrelloIDSchema` (imported from `../models`) rather than `id: z.unknown()`. Affects 200+ parameter files.
  - **Top-level `oneOf` schemas** (e.g. `posStringOrNumber: oneOf:[{string,enum:['top','bottom']}, {number}]`) are emitted as proper `z.union([...])` schemas in the models directory. The Trello-specific workaround that flattened `posStringOrNumber` to `z.number()` has been removed.
  - **Path-level shared parameters** are merged into operation-level parameters via the `mergePathParameters` transform so they participate in the normal generation pipeline.
  - **`fields`-style CSV query params** (entities `Action`, `Attachment`, `Board`, `Card`, `Notification`, `Organization`, `Token`): now accept `z.enum([...documented field names...])` or an array thereof in addition to the existing free-form `string | string[]`. Affected: `getAction`, `getActionBoard`, `getActionCard`, `getActionOrganization`, `getBoardLists`, `getCard`, `getCardAttachments`, `getCardBoard`, `getEnterpriseOrganizations`, `getListBoard`, `getMember`, `getMemberBoards`, `getMemberInvitedBoards`, `getMemberInvitedOrganizations`, `getMemberNotifications`, `getMemberOrganizations`, `getNotification`, `getNotificationBoard`, `getNotificationCard`, `getNotificationOrganization`, `getOrganizationBoards`, `getToken`, `deactivateEnterpriseMember`. Entities whose `<Entity>Fields` enum was missing or unusable in the swagger are seeded separately (see the next two bullets).
  - **`fields` params for entities whose swagger enum was missing or truncated.** `List` (shipped as the singleton `['id']`), `Organization` (truncated to `['id', 'name']`), and `Checklist` / `Sticker` / `Label` / `CustomEmoji` (no `<Entity>Fields` schema at all). The `<Entity>Fields` enums are now seeded/created from the corresponding object models (`TrelloList`, `Organization`, `Checklist`, `Label`, `CustomEmoji`) and the documented Sticker object, so these params expose the typed enum as the 4-branch `string | string[] | enum | enum[]` union. New generated models: `ListFieldsSchema` (expanded), `OrganizationFieldsSchema` (expanded), `ChecklistFieldsSchema`, `StickerFieldsSchema`, `LabelFieldsSchema`, `CustomEmojiFieldsSchema`. Affected params include `getList.fields`, `getBoardLists.fields`, `getCardList.fields`, `getActionList.fields`, `getNotificationList.fields`, `getChecklist.fields`, `getCard.checklistFields`/`stickerFields`, `getCardSticker.fields`, `getCardStickers.fields`, `getLabel.fields`, and the organization-`fields` params across `getMember`, `getMemberBoards`, `getMemberOrganizations`, `getMemberInvitedOrganizations`, `getEnterpriseOrganizations`, `getActionOrganization`, `getNotification`, `getNotificationOrganization`, `search`. The loose `string`/`string[]` branches are retained, so this is not a breaking change.
  - **Member `fields` params**: Trello's swagger ships the `MemberFields` enum as a useless singleton (`['id']`), so every member-`fields` param had degraded to a bare string (or, where the swagger used an explicit `$ref`, to the over-restrictive `MemberFieldsSchema` that accepted only `'id'`). The `MemberFields` enum is now seeded from the [documented member object fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#member-object) (`id`, `avatarHash`, `avatarUrl`, `fullName`, `username`, `initials`, `confirmed`, `idBoards`, `idOrganizations`, …), so all member-`fields` params now expose the typed enum (CSV params as the 4-branch `string | string[] | enum | enum[]` union; the single-value `getMemberField.field` path param as `string | enum`). Affected: `getEnterpriseMembers.fields`, `getBoardMemberships.memberFields`, `getActionMember.fields`, `getActionCreator.fields`, `getCardMembers.fields`, `getCardMembersVoted.fields`, `getNotificationMember.fields`, `getNotificationCreator.fields`, `getTokenMember.fields`, `getMemberField.field`, plus the `memberFields`/`memberCreatorFields`/`memberVotedFields` params on `getAction`, `getCard`, `getMember`, `getMemberNotifications`, `getNotification`. The loose `string`/`string[]` branches are retained, so this is non-breaking and undocumented field names are still accepted.
  - **Inline-backtick CSV query params** ("Comma-separated list of: `a`, `b`, …" / "all or a comma-separated list of: `a`, `b`, …" with the field names listed inline and no `[fields](…)` doc link): now accept `z.enum([…])` or an array thereof alongside the free-form `string | string[]`. Affected: `getEnterprise.fields`, `getCardCheckItemStates.fields`, `search.modelTypes`/`boardFields`/`cardFields`. Interrupting parentheticals in the description (e.g. the pagination caveat on `getEnterprise.fields`) are stripped before extraction.
  - **Single-value `$ref` enums in query and path params**: `Color` (`createLabel.color`, `updateLabel.color`), `ViewFilter` (`getBoardLists.cards`/`filter`, `getBoardListsByFilter.filter`), and the path `field` params on `getActionField`, `getCardField`, `getNotificationField`, `getOrganizationField` now expose `z.union([z.string(), z.enum([...])])`.
  - **Inline-listed JSDoc enums** ("One of: `a`, `b`, `c`" / "Valid values: a, b, c") on plain `string` params: `boardStars`, `getBoardStars.filter`, `getEnterprise.members`/`memberFields`/`memberSortOrder`/`organizations`, `getEnterpriseMembers.count`, `createEnterpriseToken.expiration`, `getBoardField.field`, `getMemberNotifications.readFilter`, `updateBoard.prefs/{permissionLevel,invitations,voting,comments,background,cardAging}`, `updateOrganization.prefs/{boardVisibilityRestrict/*,permissionLevel}`.
  - **Positioning params** (`pos` and friends), meaning `top`, `bottom`, or a positive number, are typed as `z.union([z.string(), z.number(), z.enum(['top', 'bottom'])])` across `createBoardList`, `createCardChecklist`, `createChecklist`, `createChecklistItem`, `createCustomField`, `createCustomFieldOption`, `createMemberSavedSearch`, `starBoard`, `updateCardCheckItem`, `updateCardChecklistItem`, `updateChecklist`, `updateCustomField`, `updateMemberBoardStar`, `updateMemberSavedSearch`. Loose `z.string()` branch kept for backward compatibility with callers that previously passed `z.string()` / `z.unknown()`.
  - **`$ref`-to-enum/primitive-union request body fields** picked up the same treatment, so body-side `pos`/`color`/`idCard`/etc. flow through the same inline expansion instead of `z.unknown()`.
- `POST /checklists.name` JSDoc now documents the server-side default (`**Defaults**: `Checklist``), verified empirically against the live API.

### Internal

- Build scripts (`scripts/build-og-image`, `scripts/copy-api-to-ru`) migrated from `.mjs` to TypeScript, executed via `tsx`. `tsx` added as a dev dependency.
- `repository.url` switched to the canonical `git+https://` form so the npm package page can auto-link Issues and Pull Requests against the GitHub repo.
- npm `description` and `keywords` reworked for discoverability: leads with "type-safe", names Zod 4 explicitly, mentions checklists, and adds high-intent keywords (`javascript`, `nodejs`, `browser`, `atlassian-trello`, `trello-board`, `trello-card`). GitHub repo description and topics aligned to match.
- Regenerated `src/api`, `src/models`, `src/parameters` from the latest Trello OpenAPI spec. No public-API changes.
- `apiObject` re-exported from `#/core` so generated modules can import it from the barrel.
- JSDoc links to the Trello developer docs rewritten from site-relative (`/cloud/trello/...`) to absolute (`https://developer.atlassian.com/cloud/trello/...`) so they're clickable from IDEs and typedoc.

## v2.0.0 (2026-05-19)

A substantial rewrite. The public surface changed in several places, so see the [v1 → v2 migration guide](https://mrrefactoring.github.io/trello.js/migration/v1-to-v2) for upgrade steps.

### Breaking

- **Client construction**: `new TrelloClient({ key, token })` → `createTrelloClient({ apiKey, apiToken })`. The class form is gone, replaced by a factory function.
- **Tree-shaking imports**: `BaseClient` and the `trello.js/out/api` subpath are removed. Use `createClient` from `trello.js/core` plus per-namespace subpath imports (`trello.js/boards`, `trello.js/cards`, …).
- **Module system**: package is now ESM-only (`"type": "module"`). No CJS build is shipped. Consumers must use `"type": "module"` or a bundler.
- **Node baseline**: minimum Node.js **22**.
- **Zod 4**: dependency upgraded from `zod@3` to `zod@4`. `ZodTypeDef` was removed in Zod 4, so if you typed schemas manually with `ZodType<T, ZodTypeDef, unknown>`, switch to `ZodType<T>`.
- **TypeScript 6**: built with TypeScript 6, `verbatimModuleSyntax`, `stripInternal`.
- **Removed phantom `applications` namespace** that was previously listed but never implemented.

### Added

- **Subpath exports** for every namespace: `trello.js/core`, `trello.js/actions`, `trello.js/batch`, `trello.js/boards`, `trello.js/cards`, `trello.js/checklists`, `trello.js/customFields`, `trello.js/emoji`, `trello.js/enterprises`, `trello.js/labels`, `trello.js/lists`, `trello.js/members`, `trello.js/notifications`, `trello.js/organizations`, `trello.js/plugins`, `trello.js/search`, `trello.js/tokens`, `trello.js/webhooks`. Bundlers tree-shake unused namespaces.
- **Runtime response validation** via Zod 4 schemas on every successful response. Drift between docs and reality surfaces as `ZodError` at the call site instead of silently corrupted data.
- **Automatic 429 retry** with exponential backoff (2 s, 4 s, 8 s, then a final attempt).
- **Documentation site** at <https://mrrefactoring.github.io/trello.js/>: guides, recipes, full API reference, English and Russian.
- **Test suite.** 71 unit tests (covering `createClient`, `buildUrl`, public API contract snapshot, codemod, actions-list query params) plus live integration tests for boards, cards, search, webhooks, organizations, plugins, tokens.
- **`"files": ["dist", "CHANGELOG.md"]`** in `package.json`. It restricts npm tarball contents (previously leaked `.claude/settings.local.json`, `.prettierrc`).
- **`"publishConfig"`** with `access: public` and `provenance: true`.

### Fixed

- `search.search` return type: Trello returns `{cards, boards, members, organizations}`, not a flat array.
- `organizations.createOrganization`, `getOrganizationMembership`, `createOrganizationTag`, `updateOrganizationMember`, `deactivateOrganizationMember`, `uploadOrganizationLogo`, `updateOrganizationMembers` return types corrected.
- `plugins.getPluginMemberPrivacyCompliance` typed as `void` (was `unknown`).
- `tokens.updateTokenWebhook` typed as `void`.
- `*Field` endpoints (`getActionField`, `getBoardField`, `getCardField`, `getChecklistField`, `getMemberField`, `getNotificationField`, `getOrganizationField`, `getWebhookField`) return a generic `FieldValue<T>` (`{ _value: T }`). Previously some discarded the response body (`void`) or were typed as the full entity.
- Response schemas reconciled with the live API: every entity always carries a required `id`; nullability is now precise: fields the API genuinely returns as `null` are typed `T | null | undefined`, the rest are just `T | undefined` (no spurious `null` in the type); corrected field types on `Member`, `Board`, `Checklist`, `CheckItem`, `Emoji`, `Memberships`, and several enums (`avatarSource`, `loginTypes`, `permissionLevel`, `voting`, `modelType`); added many real response fields the swagger omitted (`Board`/`Card`/`Member`/`Organization`/`Prefs` and more).

### Internal

- All API/model/parameter source is now generated from the Trello OpenAPI spec, so generated directories should not be hand-edited.
- Response object schemas strip unknown keys by default, so a new field added by the Trello API never breaks validation. Setting `TRELLO_STRICT_SCHEMAS=true` switches them to strict mode (`pnpm audit:schemas`): undocumented keys then raise a `ZodError`, which surfaces gaps between the schemas and the live API.
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
