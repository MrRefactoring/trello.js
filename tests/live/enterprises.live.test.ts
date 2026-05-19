import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';

describe('Enterprises', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let enterpriseId: string;
  let enterpriseAvailable = false;

  // IDs populated during beforeAll for use in sub-describe blocks
  let selfMemberId: string;
  let firstOrgId: string | undefined;

  beforeAll(async () => {
    trello = getLiveClient();

    enterpriseId = process.env['TRELLO_ENTERPRISE_ID'] ?? '';
    if (!enterpriseId) return;

    try {
      const enterprise = await trello.enterprises.getEnterprise({ id: enterpriseId });
      enterpriseAvailable = typeof enterprise.id === 'string';
    } catch {
      enterpriseAvailable = false;
    }

    if (!enterpriseAvailable) return;

    const me = await trello.members.getMember({ id: 'me' });
    selfMemberId = me.id;

    // Fetch first organisation for bulk/transferrable tests (may be empty on free accounts)
    try {
      const orgs = await trello.enterprises.getEnterpriseOrganizations({ id: enterpriseId, count: 1 });
      firstOrgId = orgs[0]?.id;
    } catch {
      firstOrgId = undefined;
    }
  });

  afterAll(() => tracker.cleanup());

  // ─── retrieval ─────────────────────────────────────────────────────────────

  describe('retrieval', () => {
    it('getEnterprise returns an object with an id', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const enterprise = await trello.enterprises.getEnterprise({ id: enterpriseId });
      expect(typeof enterprise.id).toBe('string');
      expect(enterprise.id.length).toBeGreaterThan(0);
    });

    it('getEnterprise id matches the requested id', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const enterprise = await trello.enterprises.getEnterprise({ id: enterpriseId });
      expect(enterprise.id).toBe(enterpriseId);
    });
  });

  // ─── admins ────────────────────────────────────────────────────────────────

  describe('admins', () => {
    it('getEnterpriseAdmins returns an object with admins array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const result = await trello.enterprises.getEnterpriseAdmins({ id: enterpriseId });
      expect(Array.isArray(result.admins)).toBe(true);
    });

    it('each admin entry has an id', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const result = await trello.enterprises.getEnterpriseAdmins({ id: enterpriseId });
      for (const admin of result.admins ?? []) {
        expect(typeof admin.id).toBe('string');
      }
    });
  });

  // ─── sign-up url ───────────────────────────────────────────────────────────

  describe('sign-up url', () => {
    it('getEnterpriseSignUpUrl returns a signupUrl string', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const result = await trello.enterprises.getEnterpriseSignUpUrl({ id: enterpriseId });
      expect(typeof result.signupUrl).toBe('string');
      expect(result.signupUrl!.length).toBeGreaterThan(0);
    });
  });

  // ─── members ───────────────────────────────────────────────────────────────

  describe('members', () => {
    it('getEnterpriseMembers returns an array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const members = await trello.enterprises.getEnterpriseMembers({ id: enterpriseId });
      expect(Array.isArray(members)).toBe(true);
    });

    it('member entries have ids', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const members = await trello.enterprises.getEnterpriseMembers({ id: enterpriseId });
      for (const m of members) {
        expect(typeof m.id).toBe('string');
      }
    });

    it('getEnterpriseMember returns the member by id', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const member = await trello.enterprises.getEnterpriseMember({
        id: enterpriseId,
        idMember: selfMemberId,
      });
      expect(member.id).toBe(selfMemberId);
    });

    it('getUser (paginated query) returns an array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const memberships = await trello.enterprises.getUser({ id: enterpriseId });
      expect(Array.isArray(memberships)).toBe(true);
    });
  });

  // ─── audit log ─────────────────────────────────────────────────────────────

  describe('audit log', () => {
    it('getEnterpriseAuditLog returns an array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const log = await trello.enterprises.getEnterpriseAuditLog({ id: enterpriseId });
      expect(Array.isArray(log)).toBe(true);
    });
  });

  // ─── organizations ─────────────────────────────────────────────────────────

  describe('organizations', () => {
    it('getEnterpriseOrganizations returns an array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const orgs = await trello.enterprises.getEnterpriseOrganizations({ id: enterpriseId });
      expect(Array.isArray(orgs)).toBe(true);
    });

    it('getEnterpriseBulkOrganizations returns an array when org is present', async ({ skip }) => {
      if (!enterpriseAvailable || !firstOrgId) skip();
      const orgs = await trello.enterprises.getEnterpriseBulkOrganizations({
        id: enterpriseId,
        idOrganizations: firstOrgId!,
      });
      expect(Array.isArray(orgs)).toBe(true);
    });

    it('getEnterpriseClaimableOrganizations returns an object', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const result = await trello.enterprises.getEnterpriseClaimableOrganizations({
        id: enterpriseId,
        limit: 10,
      });
      expect(typeof result).toBe('object');
    });

    it('getEnterprisePendingOrganizations returns an array', async ({ skip }) => {
      if (!enterpriseAvailable) skip();
      const result = await trello.enterprises.getEnterprisePendingOrganizations({ id: enterpriseId });
      expect(Array.isArray(result)).toBe(true);
    });
  });

  // ─── transferrable organizations ───────────────────────────────────────────

  describe('transferrable organizations', () => {
    it('getEnterpriseTransferrableOrganization returns a result when org is present', async ({ skip }) => {
      if (!enterpriseAvailable || !firstOrgId) skip();
      const result = await trello.enterprises.getEnterpriseTransferrableOrganization({
        id: enterpriseId,
        idOrganization: firstOrgId!,
      });
      expect(typeof result).toBe('object');
    });

    it('getEnterpriseBulkTransferrableOrganizations returns an array when org is present', async ({ skip }) => {
      if (!enterpriseAvailable || !firstOrgId) skip();
      const result = await trello.enterprises.getEnterpriseBulkTransferrableOrganizations({
        id: enterpriseId,
        idOrganizations: firstOrgId!,
      });
      expect(Array.isArray(result)).toBe(true);
    });
  });

  // ─── admin management (skip — requires admin-level enterprise permissions) ─

  describe('admin management', () => {
    it('addEnterpriseAdmin does not throw', async ({ skip }) => {
      skip();
    });

    it('removeEnterpriseAdmin does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── member management (skip — modifies real user licences / active state) ─

  describe('member management', () => {
    it('updateEnterpriseMemberLicensed does not throw', async ({ skip }) => {
      skip();
    });

    it('deactivateEnterpriseMember does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── organization management (skip — transfers real workspaces) ────────────

  describe('organization management', () => {
    it('addEnterpriseOrganization does not throw', async ({ skip }) => {
      skip();
    });

    it('removeEnterpriseOrganization does not throw', async ({ skip }) => {
      skip();
    });

    it('updateEnterpriseJoinRequests does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── tokens (skip — creates a live enterprise token) ──────────────────────

  describe('tokens', () => {
    it('createEnterpriseToken does not throw', async ({ skip }) => {
      skip();
    });
  });
});
