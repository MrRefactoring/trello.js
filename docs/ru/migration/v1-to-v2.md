---
title: Миграция v1 → v2 — trello.js
description: Обновление trello.js с v1 на v2. Фабрика createTrelloClient, переименования apiKey/apiToken, только ESM, Node 22+, subpath-экспорты для tree-shaking.
---

# Миграция: v1 → v2

`trello.js@2.0.0` — значительная переработка.

## Автоматическая миграция

[Codemod на jscodeshift](https://github.com/MrRefactoring/trello.js/tree/master/tools/codemod) обрабатывает типичные случаи:

```bash
npx jscodeshift \
  -t https://raw.githubusercontent.com/MrRefactoring/trello.js/master/tools/codemod/v1-to-v2.ts \
  --parser tsx \
  --extensions ts,tsx,js,jsx \
  ./src
```

Что переписывает автоматически:

- `import { TrelloClient }` → `import { createTrelloClient }`
- `new TrelloClient({...})` → `createTrelloClient({...})`
- `{ key, token }` → `{ apiKey, apiToken }` внутри вызовов фабрики

Что отмечает предупреждениями, но **не переписывает** (нужны ручные изменения):

- Subclassing `BaseClient` — см. секцию «Tree-shaking-импорты» ниже
- Импорты из `'trello.js/out/api'` — см. ту же секцию

Запустите с `--dry --print`, чтобы сначала посмотреть diff. Гайд покрывает каждое breaking change со сниппетами до/после.

## Module system

**v1**: dual CJS + ESM. **v2**: только ESM.

Нужно `"type": "module"` в `package.json` или сборщик. Требуется Node 22+.

## Создание клиента

**v1** (класс):

```ts
import { TrelloClient } from 'trello.js';

const client = new TrelloClient({
  key: 'YOUR_KEY',
  token: 'YOUR_TOKEN',
});
```

**v2** (фабрика):

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: 'YOUR_KEY',
  apiToken: 'YOUR_TOKEN',
});
```

Обратите внимание: `key` → `apiKey`, `token` → `apiToken`. Класс `TrelloClient` удалён.

## Tree-shaking-импорты

**v1**:

```ts
import { BaseClient } from 'trello.js';
import { Boards, Members } from 'trello.js/out/api';

class CustomTrelloClient extends BaseClient {
  boards = new Boards(this);
  members = new Members(this);
}
```

**v2**:

```ts
import { createClient } from 'trello.js/core';
import { getBoard } from 'trello.js/boards';
import { getMember } from 'trello.js/members';

const client = createClient({ apiKey, apiToken });
await getBoard(client, { id });
await getMember(client, { id: 'me' });
```

Класс `BaseClient`, классы `Boards`/`Members` и путь `trello.js/out/api` удалены. Новая модель: единый интерфейс `Client`, простые функции на эндпоинт, subpath-экспорты на namespace.

## Runtime-валидация

`v2` пропускает каждый успешный ответ через Zod 4 схему. Если Trello вернёт неожиданную форму — вы получите `ZodError`, а не тихо испорченные данные.

Если вы импортировали `zod` напрямую и использовали `ZodTypeDef` — он удалён в Zod 4, используйте `ZodType<Output, Input>`.

## Удалён namespace `applications`

Группа `applications` никогда не существовала в Trello API — это был артефакт документации. Замена не нужна.

## Версия Node

**v1**: Node 10+. **v2**: Node 22+. Никаких полифиллов для `fetch` — Node 18+ имеет встроенный, но пакет таргетит более широкий baseline Node 22.

## Зависимости

**v1**: 3+ runtime-зависимости (axios и др.). **v2**: одна runtime-зависимость — `zod`. Встроенный `fetch` везде.

## Изменения только в тулинге

- Тесты, ESLint-конфиг, CI-workflow пересобраны.
- `tslib` больше не runtime-зависимость.
- Содержимое пакета ограничено полем `"files"` — публикуются только `dist/`, `README.md`, `LICENSE`, `CHANGELOG.md`.

## Таблица переименований

| v1 | v2 |
|---|---|
| `new TrelloClient({...})` | `createTrelloClient({...})` |
| `{ key, token }` | `{ apiKey, apiToken }` |
| `BaseClient` | `createClient` из `trello.js/core` |
| `trello.js/out/api` subpath | `trello.js/<namespace>` (по одному на группу) |
| `client.boards.getBoard(...)` | `trello.boards.getBoard(...)` (сигнатура та же) |
| без валидации | Zod runtime-валидация ответов |
