---
title: Enterprises Recipe — trello.js
description: Manage Trello Enterprise — admins, organisations, audit log, transferrable orgs, member licensing. Type-safe trello.js snippets.
---

# Enterprises

Enterprise endpoints control multi-Workspace tenants on Trello Enterprise plans. Most calls require an admin token.

## Get enterprise info

```ts
const ent = await trello.enterprises.getEnterprise({ id: enterpriseId });
```

## List enterprise members

```ts
const members = await trello.enterprises.getEnterpriseMembers({
  id: enterpriseId,
  filter: 'all',
  count: 100,
  sort: 'fullName',
});
```

## List admins

```ts
const admins = await trello.enterprises.getEnterpriseAdmins({ id: enterpriseId });
```

## Audit log

```ts
const log = await trello.enterprises.getEnterpriseAuditLog({ id: enterpriseId });
```

## Add / remove an admin

```ts
await trello.enterprises.addEnterpriseAdmin({ id: enterpriseId, idMember: memberId });
await trello.enterprises.removeEnterpriseAdmin({ id: enterpriseId, idMember: memberId });
```

## Add a Workspace to the enterprise

```ts
await trello.enterprises.addEnterpriseOrganization({
  id: enterpriseId,
  idOrganization: orgId,
});
```

To remove:

```ts
await trello.enterprises.removeEnterpriseOrganization({ id: enterpriseId, idOrg: orgId });
```

## List Workspaces visible to the enterprise

```ts
const orgs = await trello.enterprises.getEnterpriseOrganizations({ id: enterpriseId });
```

## Workspaces transferrable into the enterprise

```ts
const candidates = await trello.enterprises.getEnterpriseBulkTransferrableOrganizations({
  id: enterpriseId,
  idOrganizations: 'org1,org2,org3',
});
```

## Licensing: activate / deactivate members

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

## Create an enterprise-scoped API token

```ts
const token = await trello.enterprises.createEnterpriseToken({
  id: enterpriseId,
  expiration: '30days',
});
```
