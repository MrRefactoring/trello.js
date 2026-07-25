---
title: Обработка ошибок — trello.js
description: Обработка HTTP-ошибок, несовпадений схем и сетевых сбоев в trello.js. Настраиваемый onSchemaMismatch, встроенный retry 429 с экспоненциальным backoff.
---

# Обработка ошибок

Из вызова `trello.js` может прилететь три типа сбоев.

## 1. HTTP-ошибки (non-2xx)

При 4xx или 5xx от Trello клиент бросает обычный `Error`:

```
Request failed: <status> <statusText> - <body>
```

Пример:

```ts
try {
  await trello.boards.getBoard({ id: 'does-not-exist' });
} catch (err) {
  if (err instanceof Error && err.message.startsWith('Request failed: 404')) {
    // доска не найдена
  } else {
    throw err;
  }
}
```

Текст тела ответа добавляется к сообщению — там обычно человекочитаемая причина от Trello.

## 2. Несовпадение схемы ответа {#schema-mismatches}

Несовпадение схемы означает, что запрос прошёл, а Trello ответил формой, которой библиотека не знает. **По умолчанию это не бросает исключение.** Проблема сообщается один раз в stderr, а тело возвращается невалидированным:

```
[trello.js] GET /boards/{id}/cards answered with something the schema does not describe:
at `0.labels.0.color`, expected enum value, got string. The response is returned unvalidated.
```

Так сделано намеренно. Trello выкатывает новые поля и новые значения энумов в своё облако заметно раньше, чем их описывает OpenAPI-спека: цвет лейбла из оттенков, добавленных после того, как палитра была задокументирована; `dueReminder`, ставший числом; `agent`, который теперь `null`. Ничего из этого не ваша ошибка, и ничто из этого не должно останавливать вашу программу.

Другая политика задаётся через `onSchemaMismatch`:

```ts
const trello = createTrelloClient({ apiKey, apiToken, onSchemaMismatch: 'throw' });
```

| Значение | Поведение |
| --- | --- |
| `'warn'` *(по умолчанию)* | Сообщить один раз про каждую отдельную проблему в stderr, вернуть тело невалидированным. |
| `'silent'` | Вернуть тело невалидированным и промолчать. |
| `'throw'` | Бросить [`SchemaMismatchError`](#schemamismatcherror). Это то, что нужно в тестах, где несовпадение и есть предмет проверки. |
| `(report) => void` | Полностью заменить отчётность — направить её в свой логгер, метрики или трекер. |

Отчётность дедуплицируется на всё время жизни процесса: одно испорченное поле на доске в 500 карточек — это одна строка, а не пятьсот.

### SchemaMismatchError

```ts
import { SchemaMismatchError } from 'trello.js/core';

try {
  await trello.boards.getBoardCards({ id });
} catch (err) {
  if (err instanceof SchemaMismatchError) {
    console.error(err.report.endpoint); // 'GET /boards/{id}/cards'
    console.error(err.report.issues); // [{ path, expected, received }]
  }
}
```

`report` называет пути полей и типы и **никогда — значения в них**: его можно вставить прямо в баг-репорт, не утащив в логи и трекер ошибок названия карточек, тексты комментариев и содержимое кастомных полей. Исходный `ZodError` сохраняется в `err.cause`, если нужны сырые issues.

Несовпадение обычно означает, что спека Trello разошлась с реальностью. [Заведите issue](https://github.com/MrRefactoring/trello.js/issues) с этим отчётом — в нём есть всё нужное, чтобы починить схему, и ничего из того, что принадлежит вам.

### Как направить отчёты куда-то полезно

```ts
const trello = createTrelloClient({
  apiKey,
  apiToken,
  onSchemaMismatch: report => {
    logger.warn({ endpoint: report.endpoint, issues: report.issues }, 'trello schema drift');
  },
});
```

### Как выключить валидацию совсем

`skipParsing: true` — инструмент грубее: он вообще не запускает схемы, поэтому не валидируется **ни один** ответ, и трансформации схем тоже перестают работать (даты остаются строками, а не объектами `Date`). Предпочитайте `onSchemaMismatch` — он сдаётся только на тех ответах, которые реально не сошлись. См. [TypeScript и схемы](/ru/guide/typescript).

## 3. Сетевые ошибки

Всё, что кидает `fetch` (DNS-сбой, connection refused, timeout) — пробрасывается как есть. Обрабатывайте как любую другую ошибку `fetch`.

## Автоматический retry на 429

Rate-limit-ответы (`HTTP 429 Too Many Requests`) автоматически ретраятся с экспоненциальным backoff: 2 с, 4 с, 8 с, и финальная попытка. После четырёх попыток последний 429 бросается как обычная HTTP-ошибка.

Оборачивать вызовы в retry-цикл не нужно. Если 429 случаются часто — снижайте частоту запросов или используйте [batch-эндпоинт](/ru/recipes/boards#batch).

## Паттерн: типизированный handler

```ts
import { SchemaMismatchError } from 'trello.js/core';

async function safeGetBoard(trello, id: string) {
  try {
    return { ok: true, board: await trello.boards.getBoard({ id }) } as const;
  } catch (err) {
    if (err instanceof SchemaMismatchError) return { ok: false, kind: 'schema', report: err.report } as const;
    if (err instanceof Error && err.message.includes('404')) return { ok: false, kind: 'not_found' } as const;
    if (err instanceof Error) return { ok: false, kind: 'http', message: err.message } as const;
    throw err;
  }
}
```

Этот handler увидит schema-сбой только если клиент создан с `onSchemaMismatch: 'throw'` — при поведении по умолчанию он не сработает никогда, потому что вызов завершается успешно.
