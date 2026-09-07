import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient, getRawLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Organizations', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let orgId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const org = await trello.organizations.createOrganization({
      displayName: testName('org-suite'),
    });

    orgId = org.id!;
    tracker.defer(async () => {
      await trello.organizations.deleteOrganization({ id: orgId });
    });
  });

  afterAll(() => tracker.cleanup());

  // ─── retrieval ─────────────────────────────────────────────────────────────

  describe('retrieval', () => {
    it('createOrganization returns an Organization with id', () => {
      expect(typeof orgId).toBe('string');
      expect(orgId.length).toBeGreaterThan(0);
    });

    it('getOrganization returns id and displayName', async () => {
      const org = await trello.organizations.getOrganization({ id: orgId });
      expect(org.id).toBe(orgId);
      expect(typeof org.displayName).toBe('string');
    });

    it('getOrganizationField does not throw', async () => {
      await expect(
        trello.organizations.getOrganizationField({ id: orgId, field: 'displayName' }),
      ).resolves.not.toThrow();
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    it('updateOrganization returns the updated Organization', async () => {
      const newName = testName('org-updated');
      const updated = await trello.organizations.updateOrganization({
        id: orgId,
        displayName: newName,
      });
      expect(updated.id).toBe(orgId);
      expect(updated.displayName).toBe(newName);
    });
  });

  // ─── actions ───────────────────────────────────────────────────────────────

  describe('actions', () => {
    it('getOrganizationActions returns an array', async () => {
      const actions = await trello.organizations.getOrganizationActions({ id: orgId });
      expect(Array.isArray(actions)).toBe(true);
    });
  });

  // ─── boards ────────────────────────────────────────────────────────────────

  describe('boards', () => {
    it('getOrganizationBoards returns an array', async () => {
      const boards = await trello.organizations.getOrganizationBoards({ id: orgId });
      expect(Array.isArray(boards)).toBe(true);
    });
  });

  // ─── members ───────────────────────────────────────────────────────────────

  describe('members', () => {
    it('getOrganizationMembers returns an array', async () => {
      const members = await trello.organizations.getOrganizationMembers({ id: orgId });
      expect(Array.isArray(members)).toBe(true);
    });

    it('member entries have ids', async () => {
      const members = await trello.organizations.getOrganizationMembers({ id: orgId });
      for (const member of members) {
        expect(typeof member.id).toBe('string');
      }
    });

    it('updateOrganizationMembers does not throw', async ({ skip }) => {
      // Requires adding an external member — skip to avoid side effects
      skip();
    });

    it('updateOrganizationMember does not throw', async ({ skip }) => {
      // Requires another member in the workspace — skip
      skip();
    });

    it('deactivateOrganizationMember does not throw', async ({ skip }) => {
      // Requires enterprise workspace — skip
      skip();
    });

    it('removeOrganizationMember does not throw', async ({ skip }) => {
      // Avoid removing the only member — skip
      skip();
    });

    it('removeOrganizationMemberFromAllBoards does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── memberships ───────────────────────────────────────────────────────────

  describe('memberships', () => {
    let membershipId: string;

    beforeAll(async () => {
      const memberships = await trello.organizations.getOrganizationMemberships({ id: orgId });
      if (memberships.length > 0) {
        membershipId = memberships[0].id!;
      }
    });

    it('getOrganizationMemberships returns an array', async () => {
      const memberships = await trello.organizations.getOrganizationMemberships({ id: orgId });
      expect(Array.isArray(memberships)).toBe(true);
    });

    it('getOrganizationMembership returns a Memberships object', async ({ skip }) => {
      if (!membershipId) skip();
      const membership = await trello.organizations.getOrganizationMembership({
        id: orgId,
        idMembership: membershipId,
      });
      expect(membership.id).toBe(membershipId);
    });
  });

  // ─── tags ──────────────────────────────────────────────────────────────────

  describe('tags', () => {
    let tagId: string;
    let tagsAvailable = false;

    beforeAll(async () => {
      try {
        const tag = await trello.organizations.createOrganizationTag({ id: orgId });
        tagId = tag.id!;
        tagsAvailable = true;
        tracker.defer(async () => {
          await trello.organizations.deleteOrganizationTag({ id: orgId, idTag: tagId }).catch(() => {});
        });
      } catch {
        tagsAvailable = false;
      }
    });

    it('getOrganizationTags returns an array', async () => {
      const tags = await trello.organizations.getOrganizationTags({ id: orgId });
      expect(Array.isArray(tags)).toBe(true);
    });

    it('createOrganizationTag returns a Tag with id', ({ skip }) => {
      if (!tagsAvailable) skip();
      expect(typeof tagId).toBe('string');
      expect(tagId.length).toBeGreaterThan(0);
    });

    it('deleteOrganizationTag removes the tag', async ({ skip }) => {
      if (!tagsAvailable) skip();
      await trello.organizations.deleteOrganizationTag({ id: orgId, idTag: tagId });
      const tags = await trello.organizations.getOrganizationTags({ id: orgId });
      expect(tags.some(t => t.id === tagId)).toBe(false);
      tagsAvailable = false;
    });
  });

  // ─── expanded workspace fields ─────────────────────────────────────────────

  describe('expanded workspace fields', () => {
    it('descData carries the emoji map', async () => {
      const org = await trello.organizations.getOrganization({ id: orgId });

      expect(org.descData?.emoji).toBeDefined();
    });

    it('boardCounts counts boards per member', async ({ skip }) => {
      const orgs = await trello.members.getMemberOrganizations({ id: 'me', fields: 'all' });
      const counts = orgs.flatMap(org => org.boardCounts ?? []);

      if (counts.length === 0) skip('no workspace on this account reports board counts');

      expect(counts.every(count => typeof count.idMember === 'string')).toBe(true);
      expect(counts.every(count => typeof count.boardCount === 'number')).toBe(true);
    });

    it('credits describe the rewards applied to a workspace', async ({ skip }) => {
      const orgs = await trello.members.getMemberOrganizations({ id: 'me', fields: 'all' });
      const credits = orgs.flatMap(org => org.credits ?? []);

      if (credits.length === 0) skip('no workspace on this account carries credits');

      expect(credits.every(credit => typeof credit.id === 'string')).toBe(true);
      expect(credits.every(credit => typeof credit.applied === 'boolean')).toBe(true);
      expect(credits.every(credit => typeof credit.count === 'number')).toBe(true);
    });

    it('raw response keeps the shapes the schema now claims', async () => {
      const raw = (await getRawLiveClient().members.getMemberOrganizations({
        id: 'me',
        fields: 'all',
      })) as unknown as Array<{
        descData?: { emoji?: unknown } | null;
        boardCounts?: Array<Record<string, unknown>>;
        credits?: Array<Record<string, unknown>>;
      }>;

      const described = raw.filter(org => org.descData);

      expect(described.length).toBeGreaterThan(0);
      expect(described.every(org => typeof org.descData?.emoji === 'object')).toBe(true);

      for (const count of raw.flatMap(org => org.boardCounts ?? [])) {
        expect(Object.keys(count).sort()).toEqual(['boardCount', 'idMember']);
      }

      for (const credit of raw.flatMap(org => org.credits ?? [])) {
        expect(Object.keys(credit).sort()).toEqual(['applied', 'count', 'id', 'reward', 'type', 'via']);
      }
    });
  });

  // ─── plugin data ───────────────────────────────────────────────────────────

  describe('plugin data', () => {
    it('getOrganizationPluginData returns an array', async () => {
      const data = await trello.organizations.getOrganizationPluginData({ id: orgId });
      expect(Array.isArray(data)).toBe(true);
    });
  });

  // ─── exports ───────────────────────────────────────────────────────────────

  describe('exports', () => {
    it('getOrganizationExports does not throw', async ({ skip }) => {
      // Requires premium/enterprise workspace — skip for free workspaces
      skip();
    });

    it('createOrganizationExport does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── logo ──────────────────────────────────────────────────────────────────

  describe('logo', () => {
    it('uploadOrganizationLogo does not throw', async ({ skip }) => {
      // Requires multipart file upload — skip
      skip();
    });

    it('deleteOrganizationLogo does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── prefs ─────────────────────────────────────────────────────────────────

  describe('prefs', () => {
    it('deleteOrganizationAssociatedDomain does not throw', async ({ skip }) => {
      // Requires an associated domain to be set — skip
      skip();
    });

    it('deleteOrganizationInviteRestriction does not throw', async ({ skip }) => {
      skip();
    });
  });

  // ─── billable guests ───────────────────────────────────────────────────────

  describe('billable guests', () => {
    it('getOrganizationNewBillableGuests does not throw', async ({ skip }) => {
      // Requires an enterprise workspace with a real board — skip
      skip();
    });
  });
});
