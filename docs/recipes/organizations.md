---
title: Organizations Recipe — trello.js
description: Create and manage Trello organisations (Workspaces). Invite members, manage permissions, upload logos, export data. Type-safe trello.js snippets.
---

# Organizations

An "organization" is what the Trello UI calls a **Workspace** — a container for boards and members.

## Create a Workspace

```ts
const org = await trello.organizations.createOrganization({
  displayName: 'Acme Engineering',
  desc: 'Internal engineering boards',
  name: 'acme-eng', // optional; auto-generated if omitted
});
console.log(org.id, org.url);
```

## Get a Workspace

```ts
const org = await trello.organizations.getOrganization({ id: orgId });
const boards = await trello.organizations.getOrganizationBoards({ id: orgId });
const members = await trello.organizations.getOrganizationMembers({ id: orgId });
```

## Update Workspace info

```ts
await trello.organizations.updateOrganization({
  id: orgId,
  displayName: 'Acme Platform',
  desc: 'Platform team boards',
  website: 'https://acme.example.com',
});
```

## Invite a member

```ts
await trello.organizations.updateOrganizationMember({
  id: orgId,
  idMember: memberId,
  type: 'normal', // or 'admin'
});
```

## Remove a member from the Workspace

```ts
await trello.organizations.removeOrganizationMember({ id: orgId, idMember: memberId });
```

To also remove them from every board in the Workspace:

```ts
await trello.organizations.removeOrganizationMemberFromAllBoards({
  id: orgId,
  idMember: memberId,
});
```

## Upload a Workspace logo

```ts
await trello.organizations.uploadOrganizationLogo({
  id: orgId,
  file: logoBlob,
});

// remove:
await trello.organizations.deleteOrganizationLogo({ id: orgId });
```

## Export Workspace data

> Available on paid Workspace tiers only.

```ts
const exportJob = await trello.organizations.createOrganizationExport({
  id: orgId,
  attachments: true,
});

const exports = await trello.organizations.getOrganizationExports({ id: orgId });
```

## Delete a Workspace

```ts
await trello.organizations.deleteOrganization({ id: orgId });
```

Deletion is permanent. Boards inside are also deleted unless moved out first.
