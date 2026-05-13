---
title: Webhooks — trello.js
description: Создание, список, приостановка и удаление webhooks Trello. Приём callback'ов, HMAC-подпись, обработка ретраев. Типобезопасные примеры trello.js.
---

# Webhooks

Webhooks уведомляют ваш сервис о любых изменениях на объекте Trello (доска, карточка, список, участник). Trello шлёт POST на ваш callback URL.

## Создание webhook'а

```ts
const webhook = await trello.webhooks.createWebhook({
  idModel: boardId,
  callbackURL: 'https://my-app.example.com/trello/hook',
  description: 'Стрим активности доски',
  active: true,
});
console.log(webhook.id);
```

::: warning Callback URL должен быть доступен
Trello проверяет callback URL `HEAD`-запросом **в момент создания**. Он должен ответить `200`, иначе webhook не сохранится. Если эндпоинт ещё не поднят — вызов упадёт.
:::

## Список webhook'ов токена

```ts
const all = await trello.tokens.getTokenWebhooks({ token: process.env.TRELLO_TOKEN! });
```

Trello API отдаёт webhooks через токен, который их создал, а не через модель.

## Приостановка и возобновление

```ts
await trello.webhooks.updateWebhook({ id: webhook.id, active: false });
// ... позже
await trello.webhooks.updateWebhook({ id: webhook.id, active: true });
```

## Удаление webhook'а

```ts
await trello.webhooks.deleteWebhook({ id: webhook.id });
```

## Приём callback'ов

Когда на отслеживаемой модели происходит событие, Trello шлёт POST такой формы:

```json
{
  "action": { "type": "updateCard", "data": { ... }, "memberCreator": { ... } },
  "model":  { "id": "...", "name": "...", ... }
}
```

Проверяйте подпись через заголовок `X-Trello-Webhook` — см. [документацию Trello](https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/) по HMAC-алгоритму.

Минимальный Express-handler:

```ts
app.head('/trello/hook', (_req, res) => res.sendStatus(200));
app.post('/trello/hook', express.json(), (req, res) => {
  // проверка подписи здесь
  const { action, model } = req.body;
  console.log(action.type, 'on', model.id);
  res.sendStatus(200);
});
```

Отвечайте `200` быстро. Trello ретраит на non-2xx с экспоненциальным backoff, а после нескольких подряд провалов webhook отключается.
