---
title: Миграция v2 → v3 — trello.js
description: Что изменилось в trello.js v3 — несовпадение схемы больше не бросает исключение по умолчанию, SchemaMismatchError вместо ZodError, удалён createBatchRun.
---

# Миграция: v2 → v3

Одно изменение поведения, один новый тип ошибки, один удалённый экспорт. Если вы никогда не ловили schema-ошибки, обновление ничего не меняет.

## Несовпадение схемы больше не бросает исключение по умолчанию

В v2 ответ, не сошедшийся со схемой, поднимал `ZodError` и обрывал вызов. В v3 о проблеме сообщается один раз в stderr, а тело возвращается невалидированным.

```ts
// v2 — бросало, когда форма ответа Trello уезжала
const cards = await trello.boards.getBoardCards({ id });

// v3 — вернёт карточки и напечатает одну строку в stderr, если форма уехала
const cards = await trello.boards.getBoardCards({ id });
```

**Почему.** Каждый патч-релиз ветки v2.1 был починкой схемы, и два из них ([#42](https://github.com/MrRefactoring/trello.js/issues/42), [#48](https://github.com/MrRefactoring/trello.js/issues/48)) пришли от пользователей, у которых из-за этого встали продовые интеграции. Trello выкатывает новые поля и новые значения энумов в облако раньше, чем их описывает спека: цвет лейбла из редизайна палитры 2023 года, `dueReminder`, ставший числом, `agent`, который теперь `null`. Ничего из этого не ваша ошибка — и не должно становиться вашей аварией.

### Как вернуть поведение v2

```ts
const trello = createTrelloClient({ apiKey, apiToken, onSchemaMismatch: 'throw' });
```

Для тех, кому нужен прежний контракт, это вся миграция. Тип ошибки при этом другой — см. ниже.

### Остальные варианты

| Значение | Поведение |
| --- | --- |
| `'warn'` *(новое умолчание)* | Сообщить один раз про каждую отдельную проблему в stderr, вернуть тело невалидированным. |
| `'silent'` | Вернуть тело невалидированным и промолчать. |
| `'throw'` | Бросить `SchemaMismatchError` — контракт v2, но с лучшей ошибкой. |
| `(report) => void` | Полностью заменить отчётность. |

Рекомендация: в прикладном коде оставить умолчание, а в тестах ставить `'throw'` — там несовпадение и есть предмет проверки.

## `SchemaMismatchError` вместо `ZodError`

При `onSchemaMismatch: 'throw'` бросается `SchemaMismatchError`, а не сырой `ZodError`.

```ts
// v2
import { ZodError } from 'zod';

catch (err) {
  if (err instanceof ZodError) console.error(err.issues);
}

// v3
import { SchemaMismatchError } from 'trello.js/core';

catch (err) {
  if (err instanceof SchemaMismatchError) {
    console.error(err.report.endpoint); // 'GET /boards/{id}/cards'
    console.error(err.report.issues);   // [{ path, expected, received }]
  }
}
```

Сам `ZodError` никуда не делся — он лежит в `err.cause`, если вам нужны сырые issues:

```ts
if (err instanceof SchemaMismatchError && err.cause instanceof ZodError) {
  console.error(err.cause.issues);
}
```

**Зачем новый тип.** `report` называет пути полей и типы и никогда — значения в них, поэтому его можно отправить прямо в баг-репорт или в лог, не утащив с собой названия карточек, тексты комментариев и содержимое кастомных полей. И больше не нужно знать, что библиотека валидирует через Zod, чтобы поймать уехавший ответ.

## `createBatchRun` удалён из `trello.js/core`

`createBatchRun` был мёртвым кодом — реально работающий батч-раннер это `createBatchRunner`, доступный через `trello.batch.run(...)`. Если вы импортировали `createBatchRun` напрямую, используйте batch-namespace:

```ts
const [board, cards] = await trello.batch.run(b => [
  b.boards.getBoard({ id }),
  b.boards.getBoardCards({ id }),
]);
```

См. [рецепт по batch](/ru/recipes/batch).

## `PerformBatch` удалён из `trello.js/parameters`

Та же история: на него никто не ссылался. Тип параметров batch-эндпоинта — `Run`.

## Новое: экспорт досок

Пять эндпоинтов, которые описаны в спеке Trello, но в v2 наружу не выводились:

```ts
const { id: exportId } = await trello.boards.createBoardExport({ id: boardId });
const status = await trello.boards.getBoardExport({ id: boardId, idExport: exportId });
const latest = await trello.boards.getBoardMostRecentExport({ id: boardId });
```

Набор дополняют `downloadBoardExport` и `deleteBoardExport`. Мигрировать нечего — это добавления.

## Что не изменилось

- `skipParsing` работает ровно как раньше. Он остаётся более грубым инструментом: выключает схемы целиком, вместе с трансформациями вроде `z.coerce.date()`. Предпочитайте `onSchemaMismatch` — он сдаётся только на тех ответах, которые реально не сошлись.
- HTTP-ошибки, сетевые ошибки и автоматический retry на 429 не тронуты.
- Все namespace, методы, типы параметров и схемы моделей — без изменений.
- `TRELLO_STRICT_SCHEMAS=true` по-прежнему переводит схемы ответов в строгий режим; теперь он вдобавок форсит `onSchemaMismatch` в `'throw'`, чтобы аудит не отрапортовал чистый прогон по сломанной схеме.
