---
title: Emoji Recipe — trello.js
description: List Trello's built-in emoji catalogue, including categories and skin-tone variants. Type-safe trello.js snippets.
---

# Emoji

A single endpoint that returns Trello's emoji catalogue — useful for emoji pickers that match Trello's exact set (used in comments, reactions, and `:shortname:` parsing).

## List all emoji

```ts
const catalogue = await trello.emoji.getEmoji();
```

The response groups emoji by category (`people`, `nature`, `food`, etc.). Each entry has a name, shortName, and Unicode code point.

## Localised names

Pass a `locale` to get translated names:

```ts
const localised = await trello.emoji.getEmoji({ locale: 'ru' });
```

## Skin-tone variants

By default, skin-tone variants are not included. Add them:

```ts
const withSkin = await trello.emoji.getEmoji({ spritesheets: true });
```

The response includes `skinVariations` arrays on emoji that support them.

## Practical use

Most apps never need this — Trello accepts standard Unicode emoji and `:shortname:` notation in comment text. Use this endpoint only if you're building a custom emoji picker mirroring Trello's exact set.
