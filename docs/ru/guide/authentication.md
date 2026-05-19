---
title: Аутентификация — trello.js
description: Получение Trello API key и token, настройка клиента trello.js, авторизация конечных пользователей через OAuth-стайл редирект.
---

# Аутентификация

Trello REST API использует две credentials: **API key** и **token**.

## Получение key

API key идентифицирует ваше приложение. Он **публичный** — рассчитан на встраивание в Power-Up или клиентский код.

1. Откройте [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. Создайте новый Power-Up (или откройте существующий)
3. Откройте вкладку "API Key" — там лежит ваш ключ

## Получение token

Токен авторизует API key действовать от имени конкретного пользователя Trello.

- **Для разработки** нажмите ссылку "manually generate a Token" рядом с ключом. Trello запросит подтверждение — полученный токен привязан к вашему аккаунту, имеет полный read/write доступ и не истекает.
- **Для авторизации конечного пользователя** перенаправьте его на:
  ```
  https://trello.com/1/authorize?
    expiration=never&
    name=YourApp&
    scope=read,write&
    response_type=token&
    key=YOUR_KEY
  ```
  Trello редиректит обратно с токеном во фрагменте URL.

## Использование в клиенте

```ts
import { createTrelloClient } from 'trello.js';

const trello = createTrelloClient({
  apiKey: process.env.TRELLO_KEY!,
  apiToken: process.env.TRELLO_TOKEN!,
});
```

Каждый запрос автоматически получает параметры `key=…&token=…`. Вручную их добавлять не нужно.

## Чек-лист безопасности

- **Token** чувствителен — относитесь к нему как к паролю. Не коммитьте.
- В разработке используйте `.env`, в production — secret manager.
- Ротейтьте токен при подозрении на утечку — Trello позволяет отозвать токены в [trello.com/account](https://trello.com/account), раздел "Power-Ups and integrations".
- Ограничивайте scope `read`, если запись не нужна.

## Кастомный host (прокси, моки)

```ts
const trello = createTrelloClient({
  apiKey: '...',
  apiToken: '...',
  host: 'https://my-proxy.example.com/trello/1',
});
```

Полезно для тестов или для маршрутизации через внутренний egress-прокси.

## Кастомные заголовки

```ts
const trello = createTrelloClient({
  apiKey: '...',
  apiToken: '...',
  headers: { 'X-Request-Id': 'abc123' },
});
```

Эти заголовки добавляются в каждый запрос.
