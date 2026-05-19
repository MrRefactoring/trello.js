---
title: Tree-Shaking — trello.js
description: Используйте subpath-импорты вида trello.js/boards чтобы держать бандл компактным. Только ESM, sideEffects-free, экспорты на каждый namespace.
---

# Tree-Shaking

`trello.js` собран только в ESM и предоставляет subpath-экспорты на каждый namespace. Сборщики могут выкинуть всё, что не используется.

## Как это работает

В пакете объявлен один entry на namespace в поле `exports`:

```jsonc
{
  "exports": {
    ".":          "./dist/index.js",
    "./core":     "./dist/core/index.js",
    "./boards":   "./dist/api/boards.js",
    "./cards":    "./dist/api/cards.js",
    "./webhooks": "./dist/api/webhooks.js"
    // ...по одному на namespace
  }
}
```

Каждый namespace-файл импортирует только свои зависимости. Импорт одного не тянет остальные.

## Два паттерна

### Паттерн 1: полный клиент (просто, бандл побольше)

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({ apiKey, apiToken });
await trello.boards.getBoard({ id });
await trello.cards.createCard({ idList, name: 'Hi' });
```

Подходит для скриптов и серверов — клиент целиком развёрнут.

### Паттерн 2: точечные импорты (минимальный бандл)

```ts
import { createClient } from 'trello.js/core';
import { getBoard, createBoard } from 'trello.js/boards';
import { createCard } from 'trello.js/cards';

const client = createClient({ apiKey, apiToken });
const board = await getBoard(client, { id });
const card = await createCard(client, { idList: board.idLists?.[0], name: 'Hi' });
```

В бандл попадут только `boards.js`, `cards.js` и `core/`. Всё остальное уйдёт.

## Список subpath'ов

```
trello.js                  // единый клиент + все namespace
trello.js/core             // createClient, buildUrl, типы
trello.js/actions
trello.js/batch
trello.js/boards
trello.js/cards
trello.js/checklists
trello.js/customFields
trello.js/emoji
trello.js/enterprises
trello.js/labels
trello.js/lists
trello.js/members
trello.js/notifications
trello.js/organizations
trello.js/plugins
trello.js/search
trello.js/tokens
trello.js/webhooks
```

## Проверка результата

После сборки поищите в выводе функцию, которую не используете (например `getEnterprise`). Её быть не должно. Если есть — сборщик не видит ESM-экспорты: проверьте, что нет случайного прохода через CJS-шим, и что `sideEffects: false` уважается.
