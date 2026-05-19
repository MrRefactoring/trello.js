---
title: Emoji — trello.js
description: Получение встроенного emoji-каталога Trello, включая категории и варианты skin-tone.
---

# Emoji

Единственный эндпоинт, возвращающий emoji-каталог Trello — полезно для emoji-пикеров, которым нужно соответствовать набору Trello (используется в комментариях, реакциях и парсинге `:shortname:`).

## Получение всех emoji

```ts
const catalogue = await trello.emoji.getEmoji();
```

Ответ группирует emoji по категориям (`people`, `nature`, `food` и т.д.). У каждого — имя, shortName и Unicode code point.

## Локализованные имена

Передайте `locale` для переведённых имён:

```ts
const localised = await trello.emoji.getEmoji({ locale: 'ru' });
```

## Варианты skin-tone

По умолчанию skin-tone варианты не включены. Добавьте:

```ts
const withSkin = await trello.emoji.getEmoji({ spritesheets: true });
```

В ответе появятся массивы `skinVariations` у emoji, поддерживающих варианты.

## Когда пригодится

Большинству приложений этот эндпоинт не нужен — Trello принимает стандартные Unicode-emoji и `:shortname:` в текстах комментариев. Используйте только если делаете кастомный emoji-picker, точно повторяющий набор Trello.
