---
title: Карточки — trello.js
description: Создание, обновление, перенос, комментарии и вложения для карточек Trello. Чек-листы, метки, участники. Типобезопасные сниппеты trello.js.
---

# Карточки

Карточки — это рабочие элементы внутри списка. У карточки есть имя, описание, дедлайн, участники, метки, чек-листы, вложения и значения custom fields.

## Создание карточки

```ts
const card = await trello.cards.createCard({
  idList: listId,
  name: 'Написать release notes',
  desc: 'Покрыть изменения v2.0.0, шаги миграции.',
  pos: 'top',
});
```

`pos` принимает `'top'`, `'bottom'` или числовую позицию.

## Чтение карточки

```ts
const card = await trello.cards.getCard({ id: cardId });
```

## Обновление карточки

```ts
await trello.cards.updateCard({
  id: cardId,
  name: 'Написать release notes (v2)',
  due: '2026-06-01T17:00:00Z',
  dueComplete: false,
});
```

## Перенос карточки в другой список

```ts
await trello.cards.updateCard({ id: cardId, idList: targetListId });
```

## Добавление комментария

```ts
await trello.cards.createCardComment({
  id: cardId,
  text: 'Одобрено @alice — продолжаем.',
});
```

## Прикрепить файл или URL

```ts
await trello.cards.createCardAttachment({
  id: cardId,
  url: 'https://example.com/spec.pdf',
  name: 'Spec',
});
```

## Добавление чек-листа

```ts
const checklist = await trello.cards.createCardChecklist({
  id: cardId,
  name: 'Чек-лист релиза',
});

await trello.checklists.createChecklistItem({
  id: checklist.id,
  name: 'Обновить CHANGELOG',
  checked: false,
});
```

## Назначение метки

```ts
await trello.cards.addCardLabel({ id: cardId, value: labelId });
```

## Архивирование карточки

```ts
await trello.cards.updateCard({ id: cardId, closed: true });
```

## Удаление карточки

```ts
await trello.cards.deleteCard({ id: cardId });
```
