---
title: Организации — trello.js
description: Создание и управление организациями (Workspace) Trello. Приглашение участников, права, загрузка логотипов, экспорт данных.
---

# Организации

«Организация» (organization) — это то, что в UI Trello называется **Workspace**: контейнер для досок и участников.

## Создание Workspace

```ts
const org = await trello.organizations.createOrganization({
  displayName: 'Acme Engineering',
  desc: 'Внутренние инженерные доски',
  name: 'acme-eng', // опционально; генерируется автоматически если опустить
});
console.log(org.id, org.url);
```

## Получение Workspace

```ts
const org = await trello.organizations.getOrganization({ id: orgId });
const boards = await trello.organizations.getOrganizationBoards({ id: orgId });
const members = await trello.organizations.getOrganizationMembers({ id: orgId });
```

## Обновление информации о Workspace

```ts
await trello.organizations.updateOrganization({
  id: orgId,
  displayName: 'Acme Platform',
  desc: 'Доски Platform-команды',
  website: 'https://acme.example.com',
});
```

## Приглашение участника

```ts
await trello.organizations.updateOrganizationMember({
  id: orgId,
  idMember: memberId,
  type: 'normal', // или 'admin'
});
```

## Удаление участника из Workspace

```ts
await trello.organizations.removeOrganizationMember({ id: orgId, idMember: memberId });
```

Чтобы заодно удалить со всех досок Workspace:

```ts
await trello.organizations.removeOrganizationMemberFromAllBoards({
  id: orgId,
  idMember: memberId,
});
```

## Загрузка логотипа Workspace

```ts
await trello.organizations.uploadOrganizationLogo({
  id: orgId,
  file: logoBlob,
});

// удалить:
await trello.organizations.deleteOrganizationLogo({ id: orgId });
```

## Экспорт данных Workspace

> Доступно только на платных тарифах Workspace.

```ts
const exportJob = await trello.organizations.createOrganizationExport({
  id: orgId,
  attachments: true,
});

const exports = await trello.organizations.getOrganizationExports({ id: orgId });
```

## Удаление Workspace

```ts
await trello.organizations.deleteOrganization({ id: orgId });
```

Удаление безвозвратное. Доски внутри тоже удаляются, если предварительно не перенесены.
