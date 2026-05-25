import { describe, it, expect, vi } from 'vitest';
import * as enterprises from '../../../src/api/enterprises';
import type { Client, SendRequestOptions } from '../../../src/core';

function captureClient() {
  const sendRequest = vi.fn().mockResolvedValue(undefined);
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

function lastCall(sendRequest: ReturnType<typeof vi.fn>): SendRequestOptions<unknown> {
  return sendRequest.mock.calls[sendRequest.mock.calls.length - 1][0] as SendRequestOptions<unknown>;
}

describe('enterprises API (wire shape)', () => {
  it('getEnterprise → GET /enterprises/{id} with member/organization searchParams', async () => {
    const { client, sendRequest } = captureClient();
    await enterprises.getEnterprise(client, {
      id: 'e1',
      fields: 'displayName',
      members: 'admins',
      memberFields: 'username',
      memberFilter: 'q',
      memberSort: '-fullName',
      memberStartIndex: 0,
      memberCount: 10,
      organizations: 'all',
      organizationFields: 'name',
      organizationPaidAccounts: true,
    });
    const c = lastCall(sendRequest) as SendRequestOptions<unknown> & { searchParams: Record<string, unknown> };
    expect(c.url).toBe('/enterprises/e1');
    expect(c.method).toBe('GET');
    expect(c.searchParams).toMatchObject({
      fields: 'displayName',
      members: 'admins',
      member_fields: 'username',
      organization_fields: 'name',
      organization_paid_accounts: true,
    });
  });

  it('getEnterpriseAuditLog → GET /auditlog', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getEnterpriseAuditLog(client, { id: 'e1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/auditlog');
  });

  it('getEnterpriseAdmins → GET /admins', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: 'e1', admins: [] });
    await enterprises.getEnterpriseAdmins(client, { id: 'e1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/admins');
  });

  it('getEnterpriseSignUpUrl → GET /signupUrl', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ signupUrl: 'https://trello.com/signup' });
    await enterprises.getEnterpriseSignUpUrl(client, { id: 'e1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/signupUrl');
  });

  it('getUser → GET /members/query', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getUser(client, { id: 'e1', licensed: true, deactivated: false });
    const c = lastCall(sendRequest) as SendRequestOptions<unknown> & { searchParams: Record<string, unknown> };
    expect(c.url).toBe('/enterprises/e1/members/query');
    expect(c.searchParams).toMatchObject({ licensed: true, deactivated: false });
  });

  it('getEnterpriseMembers → GET /members with sort/count', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getEnterpriseMembers(client, { id: 'e1', count: 20 });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/members');
  });

  it('getEnterpriseMember → GET /members/{idMember}', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: 'm1' });
    await enterprises.getEnterpriseMember(client, { id: 'e1', idMember: 'm1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/members/m1');
  });

  it('getEnterpriseTransferrableOrganization → GET /transferrable/organization/{idOrganization}', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.getEnterpriseTransferrableOrganization(client, { id: 'e1', idOrganization: 'o1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/transferrable/organization/o1');
  });

  it('getEnterpriseBulkTransferrableOrganizations → GET /transferrable/bulk/{idOrganizations}', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getEnterpriseBulkTransferrableOrganizations(client, { id: 'e1', idOrganizations: ['o1', 'o2'] });
    const c = lastCall(sendRequest);
    expect(c.url).toContain('/enterprises/e1/transferrable/bulk/');
    expect(c.method).toBe('GET');
  });

  it('updateEnterpriseJoinRequests → PUT /enterpriseJoinRequest/bulk', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.updateEnterpriseJoinRequests(client, { id: 'e1', idOrganizations: ['o1'] });
    expect(lastCall(sendRequest).method).toBe('PUT');
  });

  it('getEnterpriseClaimableOrganizations → GET /claimableOrganizations', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.getEnterpriseClaimableOrganizations(client, { id: 'e1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/claimableOrganizations');
  });

  it('getEnterprisePendingOrganizations → GET /pendingOrganizations', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.getEnterprisePendingOrganizations(client, { id: 'e1' });
    expect(lastCall(sendRequest).url).toBe('/enterprises/e1/pendingOrganizations');
  });

  it('createEnterpriseToken → POST /tokens', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.createEnterpriseToken(client, { id: 'e1', expiration: 'never' });
    const c = lastCall(sendRequest);
    expect(c.url).toBe('/enterprises/e1/tokens');
    expect(c.method).toBe('POST');
  });

  it('getEnterpriseOrganizations → GET /organizations with fields query', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getEnterpriseOrganizations(client, { id: 'e1', fields: 'name' });
    const c = lastCall(sendRequest) as SendRequestOptions<unknown> & { searchParams: Record<string, unknown> };
    expect(c.url).toBe('/enterprises/e1/organizations');
    expect(c.searchParams).toMatchObject({ fields: 'name' });
  });

  it('addEnterpriseOrganization → PUT /organizations', async () => {
    const { client, sendRequest } = captureClient();
    await enterprises.addEnterpriseOrganization(client, { id: 'e1', idOrganization: 'o1' });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/organizations',
      method: 'PUT',
    });
  });

  it('updateEnterpriseMemberLicensed → PUT /members/{id}/licensed', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.updateEnterpriseMemberLicensed(client, { id: 'e1', idMember: 'm1', value: true });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/members/m1/licensed',
      method: 'PUT',
    });
  });

  it('deactivateEnterpriseMember → PUT /members/{id}/deactivated', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({});
    await enterprises.deactivateEnterpriseMember(client, { id: 'e1', idMember: 'm1', value: true });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/members/m1/deactivated',
      method: 'PUT',
    });
  });

  it('addEnterpriseAdmin → PUT /admins/{idMember}', async () => {
    const { client, sendRequest } = captureClient();
    await enterprises.addEnterpriseAdmin(client, { id: 'e1', idMember: 'm1' });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/admins/m1',
      method: 'PUT',
    });
  });

  it('removeEnterpriseAdmin → DELETE /admins/{idMember}', async () => {
    const { client, sendRequest } = captureClient();
    await enterprises.removeEnterpriseAdmin(client, { id: 'e1', idMember: 'm1' });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/admins/m1',
      method: 'DELETE',
    });
  });

  it('removeEnterpriseOrganization → DELETE /organizations/{idOrg}', async () => {
    const { client, sendRequest } = captureClient();
    await enterprises.removeEnterpriseOrganization(client, { id: 'e1', idOrg: 'o1' });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/organizations/o1',
      method: 'DELETE',
    });
  });

  it('getEnterpriseBulkOrganizations → GET /organizations/bulk/{ids}', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await enterprises.getEnterpriseBulkOrganizations(client, { id: 'e1', idOrganizations: ['o1', 'o2'] });
    expect(lastCall(sendRequest)).toMatchObject({
      url: '/enterprises/e1/organizations/bulk/o1,o2',
      method: 'GET',
    });
  });
});
