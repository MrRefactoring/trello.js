---
title: Быстрый старт с trello.js
description: Установка trello.js, получение Trello API key и token, первый запрос за минуту. Типобезопасно, только ESM, валидация Zod.
---

# Быстрый старт

`trello.js` — типобезопасный клиент Trello REST API для Node.js и браузеров. Покрывает все публичные эндпоинты, валидирует каждый ответ через Zod и полностью tree-shakable.

## Установка

```bash
pnpm add trello.js
# или: npm install trello.js
# или: yarn add trello.js
```

Требуется **Node.js 22+**. Пакет только ESM — проект должен быть с `"type": "module"` (или использовать сборщик).

## Получение credentials

Понадобится API key и token от Trello:

1. Зайдите на [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin) и создайте Power-Up, чтобы получить **API key**.
2. На той же странице используйте ссылку "manually generate a Token" — получите **token**, привязанный к вашему аккаунту.

Храните их в переменных окружения, не коммитьте в git.

## Первый запрос

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});

const me = await trello.members.getMember({ id: 'me' });
console.log(`Привет, ${me.fullName}`);
```

Это весь "hello world". Если имя напечаталось — всё работает.

## Что дальше

- [Аутентификация](./authentication) — детали про токены, scope, время жизни
- [Tree-Shaking](./tree-shaking) — как держать бандл компактным
- [Обработка ошибок](./error-handling) — как выглядят ошибки
- [Рецепты](/ru/recipes/boards) — типичные сценарии для досок, карточек, поиска, webhooks
- [API Reference](/api/) — каждый метод, сгенерировано из исходников (доступен только на английском)
