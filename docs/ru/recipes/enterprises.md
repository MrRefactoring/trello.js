---
title: Enterprises — trello.js
description: Управление Trello Enterprise — администраторы, организации, audit log, transferrable orgs, лицензирование участников.
---

# Enterprises

Enterprise-эндпоинты управляют мульти-Workspace тенантами на тарифах Trello Enterprise. Большинство вызовов требуют admin-токен.

## Получение информации об enterprise

```ts
const ent = await trello.enterprises.getEnterprise({ id: enterpriseId });
```

## Список участников enterprise

```ts
const members = await trello.enterprises.getEnterpriseMembers({
  id: enterpriseId,
  filter: 'all',
  count: 100,
  sort: 'fullName',
});
```

## Список администраторов

```ts
const admins = await trello.enterprises.getEnterpriseAdmins({ id: enterpriseId });
```

## Audit log

```ts
const log = await trello.enterprises.getEnterpriseAuditLog({ id: enterpriseId });
```

## Добавление / удаление администратора

```ts
await trello.enterprises.addEnterpriseAdmin({ id: enterpriseId, idMember: memberId });
await trello.enterprises.removeEnterpriseAdmin({ id: enterpriseId, idMember: memberId });
```

## Добавление Workspace в enterprise

```ts
await trello.enterprises.addEnterpriseOrganization({
  id: enterpriseId,
  idOrganization: orgId,
});
```

Удаление:

```ts
await trello.enterprises.removeEnterpriseOrganization({ id: enterpriseId, idOrg: orgId });
```

## Список Workspace в enterprise

```ts
const orgs = await trello.enterprises.getEnterpriseOrganizations({ id: enterpriseId });
```

## Workspace, доступные для переноса в enterprise

```ts
const candidates = await trello.enterprises.getEnterpriseBulkTransferrableOrganizations({
  id: enterpriseId,
  idOrganizations: 'org1,org2,org3',
});
```

## Лицензирование: активация / деактивация участников

```ts
await trello.enterprises.updateEnterpriseMemberLicensed({
  id: enterpriseId,
  idMember: memberId,
  value: true,
});

await trello.enterprises.deactivateEnterpriseMember({
  id: enterpriseId,
  idMember: memberId,
  value: true,
});
```

## Создание enterprise-scope API токена

```ts
const token = await trello.enterprises.createEnterpriseToken({
  id: enterpriseId,
  expiration: '30days',
});
```
