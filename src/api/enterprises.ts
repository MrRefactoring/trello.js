import { EnterpriseSchema, type Enterprise } from '#/models/enterprise';
import { EnterpriseAuditLogSchema, type EnterpriseAuditLog } from '#/models/enterpriseAuditLog';
import { EnterpriseAdminSchema, type EnterpriseAdmin } from '#/models/enterpriseAdmin';
import { GetEnterpriseSignUpUrlSchema, type GetEnterpriseSignUpUrl } from '#/models/getEnterpriseSignUpUrl';
import { MembershipSchema, type Membership } from '#/models/membership';
import { MemberSchema, type Member } from '#/models/member';
import { TransferrableOrganizationSchema, type TransferrableOrganization } from '#/models/transferrableOrganization';
import { ClaimableOrganizationsSchema, type ClaimableOrganizations } from '#/models/claimableOrganizations';
import { PendingOrganizationsSchema, type PendingOrganizations } from '#/models/pendingOrganizations';
import { APITokenSchema, type APIToken } from '#/models/aPIToken';
import { OrganizationSchema, type Organization } from '#/models/organization';
import type { GetEnterprise } from '#/parameters/getEnterprise';
import type { GetEnterpriseAuditLog } from '#/parameters/getEnterpriseAuditLog';
import type { GetEnterpriseAdmins } from '#/parameters/getEnterpriseAdmins';
import type { GetEnterpriseSignUpUrl as GetEnterpriseSignUpUrlParameters } from '#/parameters/getEnterpriseSignUpUrl';
import type { GetUser } from '#/parameters/getUser';
import type { GetEnterpriseMembers } from '#/parameters/getEnterpriseMembers';
import type { GetEnterpriseMember } from '#/parameters/getEnterpriseMember';
import type { GetEnterpriseTransferrableOrganization } from '#/parameters/getEnterpriseTransferrableOrganization';
import type { GetEnterpriseBulkTransferrableOrganizations } from '#/parameters/getEnterpriseBulkTransferrableOrganizations';
import type { UpdateEnterpriseJoinRequests } from '#/parameters/updateEnterpriseJoinRequests';
import type { GetEnterpriseClaimableOrganizations } from '#/parameters/getEnterpriseClaimableOrganizations';
import type { GetEnterprisePendingOrganizations } from '#/parameters/getEnterprisePendingOrganizations';
import type { CreateEnterpriseToken } from '#/parameters/createEnterpriseToken';
import type { GetEnterpriseOrganizations } from '#/parameters/getEnterpriseOrganizations';
import type { AddEnterpriseOrganization } from '#/parameters/addEnterpriseOrganization';
import type { UpdateEnterpriseMemberLicensed } from '#/parameters/updateEnterpriseMemberLicensed';
import type { DeactivateEnterpriseMember } from '#/parameters/deactivateEnterpriseMember';
import type { AddEnterpriseAdmin } from '#/parameters/addEnterpriseAdmin';
import type { RemoveEnterpriseAdmin } from '#/parameters/removeEnterpriseAdmin';
import type { RemoveEnterpriseOrganization } from '#/parameters/removeEnterpriseOrganization';
import type { GetEnterpriseBulkOrganizations } from '#/parameters/getEnterpriseBulkOrganizations';
import type { Client, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Get an enterprise by its ID. */
export async function getEnterprise(client: Client, parameters: GetEnterprise): Promise<Enterprise> {
  const config: SendRequestOptions<Enterprise> = {
    url: `/enterprises/${parameters.id}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      members: parameters.members,
      member_fields: parameters.memberFields,
      member_filter: parameters.memberFilter,
      member_sort: parameters.memberSort,
      member_sortBy: parameters.memberSortBy,
      member_sortOrder: parameters.memberSortOrder,
      member_startIndex: parameters.memberStartIndex,
      member_count: parameters.memberCount,
      organizations: parameters.organizations,
      organization_fields: parameters.organizationFields,
      organization_paid_accounts: parameters.organizationPaidAccounts,
      organization_memberships: parameters.organizationMemberships,
    },
    schema: EnterpriseSchema,
  };

  return await client.sendRequest(config);
}

/**
 * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an
 * Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is
 * required for this route.
 *
 * NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions
 * taken in AdminHub, but may not contain the source for those actions.
 */
export async function getEnterpriseAuditLog(
  client: Client,
  parameters: GetEnterpriseAuditLog,
): Promise<EnterpriseAuditLog[]> {
  const config: SendRequestOptions<EnterpriseAuditLog[]> = {
    url: `/enterprises/${parameters.id}/auditlog`,
    method: 'GET',
    schema: z.array(EnterpriseAuditLogSchema),
  };

  return await client.sendRequest(config);
}

/** Get an enterprise's admin members. */
export async function getEnterpriseAdmins(client: Client, parameters: GetEnterpriseAdmins): Promise<EnterpriseAdmin> {
  const config: SendRequestOptions<EnterpriseAdmin> = {
    url: `/enterprises/${parameters.id}/admins`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: EnterpriseAdminSchema,
  };

  return await client.sendRequest(config);
}

/** Get the signup URL for an enterprise. */
export async function getEnterpriseSignUpUrl(
  client: Client,
  parameters: GetEnterpriseSignUpUrlParameters,
): Promise<GetEnterpriseSignUpUrl> {
  const config: SendRequestOptions<GetEnterpriseSignUpUrl> = {
    url: `/enterprises/${parameters.id}/signupUrl`,
    method: 'GET',
    searchParams: {
      authenticate: parameters.authenticate,
      confirmationAccepted: parameters.confirmationAccepted,
      returnUrl: parameters.returnUrl,
      tosAccepted: parameters.tosAccepted,
    },
    schema: GetEnterpriseSignUpUrlSchema,
  };

  return await client.sendRequest(config);
}

/**
 * Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc. The response is paginated
 * and will return 100 users at a time.
 */
export async function getUser(client: Client, parameters: GetUser): Promise<Membership[]> {
  const config: SendRequestOptions<Membership[]> = {
    url: `/enterprises/${parameters.id}/members/query`,
    method: 'GET',
    searchParams: {
      licensed: parameters.licensed,
      deactivated: parameters.deactivated,
      collaborator: parameters.collaborator,
      managed: parameters.managed,
      admin: parameters.admin,
      activeSince: parameters.activeSince,
      inactiveSince: parameters.inactiveSince,
      search: parameters.search,
      cursor: parameters.cursor,
    },
    schema: z.array(MembershipSchema),
  };

  return await client.sendRequest(config);
}

/** Get the members of an enterprise. */
export async function getEnterpriseMembers(client: Client, parameters: GetEnterpriseMembers): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: `/enterprises/${parameters.id}/members`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      filter: parameters.filter,
      sort: parameters.sort,
      sortBy: parameters.sortBy,
      sortOrder: parameters.sortOrder,
      startIndex: parameters.startIndex,
      count: parameters.count,
      organization_fields: parameters.organizationFields,
      board_fields: parameters.boardFields,
    },
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}

/** Get a specific member of an enterprise by ID. */
export async function getEnterpriseMember(client: Client, parameters: GetEnterpriseMember): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/enterprises/${parameters.id}/members/${parameters.idMember}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      organization_fields: parameters.organizationFields,
      board_fields: parameters.boardFields,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Get whether an organization can be transferred to an enterprise. */
export async function getEnterpriseTransferrableOrganization(
  client: Client,
  parameters: GetEnterpriseTransferrableOrganization,
): Promise<TransferrableOrganization> {
  const config: SendRequestOptions<TransferrableOrganization> = {
    url: `/enterprises/${parameters.id}/transferrable/organization/${parameters.idOrganization}`,
    method: 'GET',
    schema: TransferrableOrganizationSchema,
  };

  return await client.sendRequest(config);
}

/** Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations. */
export async function getEnterpriseBulkTransferrableOrganizations(
  client: Client,
  parameters: GetEnterpriseBulkTransferrableOrganizations,
): Promise<TransferrableOrganization[]> {
  const config: SendRequestOptions<TransferrableOrganization[]> = {
    url: `/enterprises/${parameters.id}/transferrable/bulk/${parameters.idOrganizations}`,
    method: 'GET',
    schema: z.array(TransferrableOrganizationSchema),
  };

  return await client.sendRequest(config);
}

/** Decline enterpriseJoinRequests from one organization or bulk amount of organizations */
export async function updateEnterpriseJoinRequests(
  client: Client,
  parameters: UpdateEnterpriseJoinRequests,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/enterprises/$${parameters.id}/enterpriseJoinRequest/bulk`,
    method: 'PUT',
    searchParams: {
      idOrganizations: parameters.idOrganizations,
    },
  };

  return await client.sendRequest(config);
}

/**
 * Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on
 * activeness/ inactiveness.
 */
export async function getEnterpriseClaimableOrganizations(
  client: Client,
  parameters: GetEnterpriseClaimableOrganizations,
): Promise<ClaimableOrganizations> {
  const config: SendRequestOptions<ClaimableOrganizations> = {
    url: `/enterprises/${parameters.id}/claimableOrganizations`,
    method: 'GET',
    searchParams: {
      limit: parameters.limit,
      cursor: parameters.cursor,
      name: parameters.name,
      activeSince: parameters.activeSince,
      inactiveSince: parameters.inactiveSince,
    },
    schema: ClaimableOrganizationsSchema,
  };

  return await client.sendRequest(config);
}

/** Get the Workspaces that are pending for the enterprise by ID. */
export async function getEnterprisePendingOrganizations(
  client: Client,
  parameters: GetEnterprisePendingOrganizations,
): Promise<PendingOrganizations[]> {
  const config: SendRequestOptions<PendingOrganizations[]> = {
    url: `/enterprises/${parameters.id}/pendingOrganizations`,
    method: 'GET',
    searchParams: {
      activeSince: parameters.activeSince,
      inactiveSince: parameters.inactiveSince,
    },
    schema: z.array(PendingOrganizationsSchema),
  };

  return await client.sendRequest(config);
}

/** Create an auth Token for an Enterprise. */
export async function createEnterpriseToken(client: Client, parameters: CreateEnterpriseToken): Promise<APIToken> {
  const config: SendRequestOptions<APIToken> = {
    url: `/enterprises/${parameters.id}/tokens`,
    method: 'POST',
    searchParams: {
      expiration: parameters.expiration,
    },
    schema: APITokenSchema,
  };

  return await client.sendRequest(config);
}

/** Get the organizations of an enterprise. */
export async function getEnterpriseOrganizations(
  client: Client,
  parameters: GetEnterpriseOrganizations,
): Promise<Organization[]> {
  const config: SendRequestOptions<Organization[]> = {
    url: `/enterprises/${parameters.id}/organizations`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      filter: parameters.filter,
      startIndex: parameters.startIndex,
      count: parameters.count,
    },
    schema: z.array(OrganizationSchema),
  };

  return await client.sendRequest(config);
}

/**
 * Transfer an organization to an enterprise.
 *
 * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the
 * organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it
 * does not indicate successful addition to the enterprise.
 */
export async function addEnterpriseOrganization(
  client: Client,
  parameters: AddEnterpriseOrganization,
): Promise<Organization[]> {
  const config: SendRequestOptions<Organization[]> = {
    url: `/enterprises/${parameters.id}/organizations`,
    method: 'PUT',
    searchParams: {
      idOrganization: parameters.idOrganization,
    },
    schema: z.array(OrganizationSchema),
  };

  return await client.sendRequest(config);
}

/**
 * This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or
 * not. Revoking a license will deactivate a Member of an Enterprise.
 *
 * NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.
 */
export async function updateEnterpriseMemberLicensed(
  client: Client,
  parameters: UpdateEnterpriseMemberLicensed,
): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/enterprises/${parameters.id}/members/${parameters.idMember}/licensed`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/**
 * Deactivate a Member of an Enterprise.
 *
 * NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.
 */
export async function deactivateEnterpriseMember(
  client: Client,
  parameters: DeactivateEnterpriseMember,
): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/enterprises/${parameters.id}/members/${parameters.idMember}/deactivated`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
      fields: parameters.fields,
      organization_fields: parameters.organizationFields,
      board_fields: parameters.boardFields,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/**
 * Make Member an admin of Enterprise.
 *
 * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
 */
export async function addEnterpriseAdmin(client: Client, parameters: AddEnterpriseAdmin): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
    method: 'PUT',
  };

  return await client.sendRequest(config);
}

/**
 * Remove a member as admin from an enterprise.
 *
 * NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.
 */
export async function removeEnterpriseAdmin(client: Client, parameters: RemoveEnterpriseAdmin): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Remove an organization from an enterprise. */
export async function removeEnterpriseOrganization(
  client: Client,
  parameters: RemoveEnterpriseOrganization,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/enterprises/${parameters.id}/organizations/${parameters.idOrg}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/**
 * Accept an array of organizations to an enterprise.
 *
 * NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations
 * being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not
 * indicate successful addition to the enterprise.
 */
export async function getEnterpriseBulkOrganizations(
  client: Client,
  parameters: GetEnterpriseBulkOrganizations,
): Promise<Organization[]> {
  const config: SendRequestOptions<Organization[]> = {
    url: `/enterprises/${parameters.id}/organizations/bulk/${parameters.idOrganizations}`,
    method: 'GET',
    schema: z.array(OrganizationSchema),
  };

  return await client.sendRequest(config);
}
