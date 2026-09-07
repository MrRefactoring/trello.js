import { OrganizationSchema, type Organization } from '#/models/organization';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { ActionSchema, type Action } from '#/models/action';
import { BoardSchema, type Board } from '#/models/board';
import { ExportSchema, type Export } from '#/models/export';
import { MemberSchema, type Member } from '#/models/member';
import { MembershipsSchema, type Memberships } from '#/models/memberships';
import { PluginDataSchema, type PluginData } from '#/models/pluginData';
import { TagSchema, type Tag } from '#/models/tag';
import type { CreateOrganization } from '#/parameters/createOrganization';
import type { GetOrganization } from '#/parameters/getOrganization';
import type { UpdateOrganization } from '#/parameters/updateOrganization';
import type { DeleteOrganization } from '#/parameters/deleteOrganization';
import type { GetOrganizationField } from '#/parameters/getOrganizationField';
import type { GetOrganizationActions } from '#/parameters/getOrganizationActions';
import type { GetOrganizationBoards } from '#/parameters/getOrganizationBoards';
import type { GetOrganizationExports } from '#/parameters/getOrganizationExports';
import type { CreateOrganizationExport } from '#/parameters/createOrganizationExport';
import type { GetOrganizationMembers } from '#/parameters/getOrganizationMembers';
import type { UpdateOrganizationMembers } from '#/parameters/updateOrganizationMembers';
import type { GetOrganizationMemberships } from '#/parameters/getOrganizationMemberships';
import type { GetOrganizationMembership } from '#/parameters/getOrganizationMembership';
import type { GetOrganizationPluginData } from '#/parameters/getOrganizationPluginData';
import type { GetOrganizationTags } from '#/parameters/getOrganizationTags';
import type { CreateOrganizationTag } from '#/parameters/createOrganizationTag';
import type { UpdateOrganizationMember } from '#/parameters/updateOrganizationMember';
import type { RemoveOrganizationMember } from '#/parameters/removeOrganizationMember';
import type { DeactivateOrganizationMember } from '#/parameters/deactivateOrganizationMember';
import type { UploadOrganizationLogo } from '#/parameters/uploadOrganizationLogo';
import type { DeleteOrganizationLogo } from '#/parameters/deleteOrganizationLogo';
import type { RemoveOrganizationMemberFromAllBoards } from '#/parameters/removeOrganizationMemberFromAllBoards';
import type { DeleteOrganizationAssociatedDomain } from '#/parameters/deleteOrganizationAssociatedDomain';
import type { DeleteOrganizationInviteRestriction } from '#/parameters/deleteOrganizationInviteRestriction';
import type { DeleteOrganizationTag } from '#/parameters/deleteOrganizationTag';
import type { GetOrganizationNewBillableGuests } from '#/parameters/getOrganizationNewBillableGuests';
import type { Client, RequestOptions, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Create a new Workspace */
export async function createOrganization(
  client: Client,
  parameters: CreateOrganization,
  options?: RequestOptions,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: '/organizations',
    method: 'POST',
    searchParams: {
      displayName: parameters.displayName,
      desc: parameters.desc,
      name: parameters.name,
      website: parameters.website,
    },
    schema: OrganizationSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

export async function getOrganization(
  client: Client,
  parameters: GetOrganization,
  options?: RequestOptions,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: `/organizations/${parameters.id}`,
    method: 'GET',
    schema: OrganizationSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Update an organization */
export async function updateOrganization(
  client: Client,
  parameters: UpdateOrganization,
  options?: RequestOptions,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: `/organizations/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      displayName: parameters.displayName,
      desc: parameters.desc,
      website: parameters.website,
      'prefs/associatedDomain': parameters['prefs/associatedDomain'],
      'prefs/externalMembersDisabled': parameters['prefs/externalMembersDisabled'],
      'prefs/googleAppsVersion': parameters['prefs/googleAppsVersion'],
      'prefs/boardVisibilityRestrict/org': parameters['prefs/boardVisibilityRestrict/org'],
      'prefs/boardVisibilityRestrict/private': parameters['prefs/boardVisibilityRestrict/private'],
      'prefs/boardVisibilityRestrict/public': parameters['prefs/boardVisibilityRestrict/public'],
      'prefs/orgInviteRestrict': parameters['prefs/orgInviteRestrict'],
      'prefs/permissionLevel': parameters['prefs/permissionLevel'],
    },
    schema: OrganizationSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Delete an Organization */
export async function deleteOrganization(
  client: Client,
  parameters: DeleteOrganization,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

export async function getOrganizationField<T = unknown>(
  client: Client,
  parameters: GetOrganizationField,
  options?: RequestOptions,
): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/organizations/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List the actions on a Workspace */
export async function getOrganizationActions(
  client: Client,
  parameters: GetOrganizationActions,
  options?: RequestOptions,
): Promise<Action[]> {
  const config: SendRequestOptions<Action[]> = {
    url: `/organizations/${parameters.id}/actions`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      filter: parameters.filter,
      format: parameters.format,
      idModels: parameters.idModels,
      limit: parameters.limit,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
      page: parameters.page,
      reactions: parameters.reactions,
      before: parameters.before,
      since: parameters.since,
      entities: parameters.entities,
    },
    schema: z.array(ActionSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List the boards in a Workspace */
export async function getOrganizationBoards(
  client: Client,
  parameters: GetOrganizationBoards,
  options?: RequestOptions,
): Promise<Board[]> {
  const config: SendRequestOptions<Board[]> = {
    url: `/organizations/${parameters.id}/boards`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
    },
    schema: z.array(BoardSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Retrieve the exports that exist for the given organization */
export async function getOrganizationExports(
  client: Client,
  parameters: GetOrganizationExports,
  options?: RequestOptions,
): Promise<Export[]> {
  const config: SendRequestOptions<Export[]> = {
    url: `/organizations/${parameters.id}/exports`,
    method: 'GET',
    schema: z.array(ExportSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Kick off CSV export for an organization */
export async function createOrganizationExport(
  client: Client,
  parameters: CreateOrganizationExport,
  options?: RequestOptions,
): Promise<Export> {
  const config: SendRequestOptions<Export> = {
    url: `/organizations/${parameters.id}/exports`,
    method: 'POST',
    searchParams: {
      attachments: parameters.attachments,
    },
    schema: ExportSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List the members in a Workspace */
export async function getOrganizationMembers(
  client: Client,
  parameters: GetOrganizationMembers,
  options?: RequestOptions,
): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/organizations/${parameters.id}/members`,
    method: 'GET',
    schema: z.array(MemberSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

export async function updateOrganizationMembers(
  client: Client,
  parameters: UpdateOrganizationMembers,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/members`,
    method: 'PUT',
    searchParams: {
      email: parameters.email,
      fullName: parameters.fullName,
      type: parameters.type,
    },
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List the memberships of a Workspace */
export async function getOrganizationMemberships(
  client: Client,
  parameters: GetOrganizationMemberships,
  options?: RequestOptions,
): Promise<Memberships[]> {
  const config: SendRequestOptions<Memberships[]> = {
    url: `/organizations/${parameters.id}/memberships`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      member: parameters.member,
    },
    schema: z.array(MembershipsSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get a single Membership for an Organization */
export async function getOrganizationMembership(
  client: Client,
  parameters: GetOrganizationMembership,
  options?: RequestOptions,
): Promise<Memberships> {
  const config: SendRequestOptions<Memberships> = {
    url: `/organizations/${parameters.id}/memberships/${parameters.idMembership}`,
    method: 'GET',
    searchParams: {
      member: parameters.member,
    },
    schema: MembershipsSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get organization scoped pluginData on this Workspace */
export async function getOrganizationPluginData(
  client: Client,
  parameters: GetOrganizationPluginData,
  options?: RequestOptions,
): Promise<PluginData[]> {
  const config: SendRequestOptions<PluginData[]> = {
    url: `/organizations/${parameters.id}/pluginData`,
    method: 'GET',
    schema: z.array(PluginDataSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List the organization's collections */
export async function getOrganizationTags(
  client: Client,
  parameters: GetOrganizationTags,
  options?: RequestOptions,
): Promise<Tag[]> {
  const config: SendRequestOptions<Tag[]> = {
    url: `/organizations/${parameters.id}/tags`,
    method: 'GET',
    schema: z.array(TagSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Create a Tag in an Organization */
export async function createOrganizationTag(
  client: Client,
  parameters: CreateOrganizationTag,
  options?: RequestOptions,
): Promise<Tag> {
  const config: SendRequestOptions<Tag> = {
    url: `/organizations/${parameters.id}/tags`,
    method: 'POST',
    schema: TagSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Add a member to a Workspace or update their member type. */
export async function updateOrganizationMember(
  client: Client,
  parameters: UpdateOrganizationMember,
  options?: RequestOptions,
): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
    method: 'PUT',
    searchParams: {
      type: parameters.type,
    },
    schema: MemberSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Remove a member from a Workspace */
export async function removeOrganizationMember(
  client: Client,
  parameters: RemoveOrganizationMember,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Deactivate or reactivate a member of a Workspace */
export async function deactivateOrganizationMember(
  client: Client,
  parameters: DeactivateOrganizationMember,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/members/${parameters.idMember}/deactivated`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Set the logo image for a Workspace */
export async function uploadOrganizationLogo(
  client: Client,
  parameters: UploadOrganizationLogo,
  options?: RequestOptions,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: `/organizations/${parameters.id}/logo`,
    method: 'POST',
    searchParams: {
      file: parameters.file,
    },
    schema: OrganizationSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Delete a the logo from a Workspace */
export async function deleteOrganizationLogo(
  client: Client,
  parameters: DeleteOrganizationLogo,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/logo`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Remove a member from a Workspace and from all Workspace boards */
export async function removeOrganizationMemberFromAllBoards(
  client: Client,
  parameters: RemoveOrganizationMemberFromAllBoards,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/members/${parameters.idMember}/all`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Remove the associated Google Apps domain from a Workspace */
export async function deleteOrganizationAssociatedDomain(
  client: Client,
  parameters: DeleteOrganizationAssociatedDomain,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/prefs/associatedDomain`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Remove the email domain restriction on who can be invited to the Workspace */
export async function deleteOrganizationInviteRestriction(
  client: Client,
  parameters: DeleteOrganizationInviteRestriction,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/prefs/orgInviteRestrict`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Delete an organization's tag */
export async function deleteOrganizationTag(
  client: Client,
  parameters: DeleteOrganizationTag,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/organizations/${parameters.id}/tags/${parameters.idTag}`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Used to check whether the given board has new billable guests on it. */
export async function getOrganizationNewBillableGuests(
  client: Client,
  parameters: GetOrganizationNewBillableGuests,
  options?: RequestOptions,
): Promise<unknown> {
  const config: SendRequestOptions<unknown> = {
    url: `/organizations/${parameters.id}/newBillableGuests/${parameters.idBoard}`,
    method: 'GET',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}
