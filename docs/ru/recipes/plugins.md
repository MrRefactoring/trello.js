---
title: Плагины — trello.js
description: Управление плагинами Trello Power-Up, listings, member privacy compliance.
---

# Плагины

«Плагины» (plugins) в Trello API — это то, что в UI называется **Power-Ups**. Эти эндпоинты управляют метаданными Power-Up, marketplace-listings и privacy-disclosures — нужны в основном авторам Power-Ups.

## Метаданные плагина

```ts
const plugin = await trello.plugins.getPlugin({ idPlugin: pluginId });
console.log(plugin.name, plugin.public, plugin.iconUrl);
```

## Обновление настроек плагина

```ts
await trello.plugins.updatePlugin({
  idPlugin: pluginId,
  name: 'My Power-Up',
  iconUrl: 'https://cdn.example.com/icon.svg',
  public: true,
});
```

## Управление marketplace listings

Listing — это per-locale представление Power-Up в Trello marketplace.

```ts
const listing = await trello.plugins.createPluginListing({
  idPlugin: pluginId,
  description: 'Adds amazing features to your board.',
  locale: 'en-US',
  name: 'My Power-Up',
  overview: 'Однопредложение для marketplace-карточки.',
});

await trello.plugins.updatePluginListing({
  idPlugin: pluginId,
  idListing: listing.id,
  description: 'Обновлённое описание.',
});
```

## Privacy compliance

Trello требует от Power-Ups, хранящих member-данные, декларировать compliance. Отметить Power-Up как соответствующий:

```ts
await trello.plugins.getPluginMemberPrivacyCompliance({ idPlugin: pluginId });
```

Вызов возвращает `void` при успехе и является частью GDPR / member-data flow Trello.

## Включение / отключение Power-Up на доске

Эти методы живут в namespace `boards`:

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

## Чтение Power-Up данных, сохранённых на карточке

Power-Ups могут прикреплять произвольный JSON к карточке через `pluginData`:

```ts
const pluginData = await trello.cards.getCardPluginData({ id: cardId });
```
