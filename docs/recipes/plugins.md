---
title: Plugins Recipe — trello.js
description: Manage Trello Power-Up plugins, listings, and member privacy compliance. Type-safe trello.js snippets.
---

# Plugins

"Plugins" in the Trello API are what the UI calls **Power-Ups**. These endpoints manage Power-Up metadata, listings and privacy disclosures — used mostly by Power-Up authors.

## Get plugin metadata

```ts
const plugin = await trello.plugins.getPlugin({ idPlugin: pluginId });
console.log(plugin.name, plugin.public, plugin.iconUrl);
```

## Update plugin settings

```ts
await trello.plugins.updatePlugin({
  idPlugin: pluginId,
  name: 'My Power-Up',
  iconUrl: 'https://cdn.example.com/icon.svg',
  public: true,
});
```

## Manage marketplace listings

A listing is the per-locale presentation of a Power-Up in the Trello marketplace.

```ts
const listing = await trello.plugins.createPluginListing({
  idPlugin: pluginId,
  description: 'Adds amazing features to your board.',
  locale: 'en-US',
  name: 'My Power-Up',
  overview: 'One-sentence pitch shown in marketplace cards.',
});

await trello.plugins.updatePluginListing({
  idPlugin: pluginId,
  idListing: listing.id,
  description: 'Updated description.',
});
```

## Privacy compliance

Trello requires Power-Ups that store member data to declare compliance. Mark your Power-Up as compliant:

```ts
await trello.plugins.getPluginMemberPrivacyCompliance({ idPlugin: pluginId });
```

This call returns `void` on success and is part of Trello's GDPR / member-data flow.

## Enable / disable a Power-Up on a board

These live under the `boards` namespace:

```ts
await trello.boards.enableBoardPlugin({
  id: boardId,
  idPlugin: pluginId,
});

await trello.boards.disableBoardPlugin({
  id: boardId,
  idPlugin: pluginId,
});
```

## Read Power-Up data stored on a card

Power-Ups can attach arbitrary JSON to a card via `pluginData`:

```ts
const pluginData = await trello.cards.getCardPluginData({ id: cardId });
```
