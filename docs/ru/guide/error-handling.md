---
title: Обработка ошибок — trello.js
description: Обработка HTTP-ошибок, ZodError несовпадений схем, сетевых сбоев в trello.js. Встроенный retry 429 с экспоненциальным backoff.
---

# Обработка ошибок

Из вызова `trello.js` может прилететь три типа ошибок. Каждая — обычный `Error`, никаких кастомных классов импортировать не надо.

## 1. HTTP-ошибки (non-2xx)

При 4xx или 5xx от Trello клиент бросает:

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

## 2. Ошибки валидации схемы (ZodError)

Если форма ответа отличается от ожидаемой клиентом — Zod бросает `ZodError`:

```ts
import { ZodError } from 'zod';

try {
  await trello.boards.getBoard({ id });
} catch (err) {
  if (err instanceof ZodError) {
    console.error('API вернул неожиданную форму:', err.issues);
  }
}
```

Schema-ошибки обычно означают, что Trello swagger разошёлся с реальностью, или вы попали на beta-эндпоинт. Заведите issue с упавшим payload.

## 3. Сетевые ошибки

Всё, что кидает `fetch` (DNS-сбой, connection refused, timeout) — пробрасывается как есть. Обрабатывайте как любую другую ошибку `fetch`.

## Автоматический retry на 429

Rate-limit-ответы (`HTTP 429 Too Many Requests`) автоматически ретраятся с экспоненциальным backoff: 2 с, 4 с, 8 с, и финальная попытка. После четырёх попыток последний 429 бросается как обычная HTTP-ошибка.

Оборачивать вызовы в retry-цикл не нужно. Если 429 случаются часто — снижайте частоту запросов или используйте [batch-эндпоинт](/ru/recipes/boards#batch).

## Паттерн: типизированный handler

```ts
import { ZodError } from 'zod';

async function safeGetBoard(trello, id: string) {
  try {
    return { ok: true, board: await trello.boards.getBoard({ id }) } as const;
  } catch (err) {
    if (err instanceof ZodError) return { ok: false, kind: 'schema', issues: err.issues } as const;
    if (err instanceof Error && err.message.includes('404')) return { ok: false, kind: 'not_found' } as const;
    if (err instanceof Error) return { ok: false, kind: 'http', message: err.message } as const;
    throw err;
  }
}
```
