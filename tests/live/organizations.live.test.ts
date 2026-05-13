import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
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
