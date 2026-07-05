import { describe, it, expect } from 'vitest';
import { CardSchema } from '../../../src/models/card';
import { BoardSchema } from '../../../src/models/board';
import { TrelloListSchema } from '../../../src/models/trelloList';
import { MemberSchema } from '../../../src/models/member';
import { ActionSchema } from '../../../src/models/action';
import { ChecklistSchema } from '../../../src/models/checklist';
import { CheckItemSchema } from '../../../src/models/checkItem';
import { CheckItemStateSchema } from '../../../src/models/checkItemState';
import { LabelSchema } from '../../../src/models/label';
import { AttachmentSchema } from '../../../src/models/attachment';
import { OrganizationSchema } from '../../../src/models/organization';

// Breadth coverage for the response schemas: every model is parsed twice — with
// the MINIMAL payload (only the fields the API guarantees, i.e. the required
// ones) and the MAXIMAL payload (every documented field populated, including
// nested refs, enums and date-coercion). The maximal case is what catches
// schema drift like #42 (a real field arriving in an unexpected shape); the
// minimal case guards against accidentally making an optional field required.

const ID = 'a'.repeat(24);
const ISO = '2026-05-30T12:00:00.000Z';

describe('response schema breadth — minimal vs maximal', () => {
  describe('Card', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => CardSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload (every field populated)', () => {
      const card = CardSchema.parse({
        id: ID,
        address: '1 Infinite Loop',
        badges: {
          attachmentsByType: { trello: { board: 1, card: 2 } },
          location: true,
          votes: 3,
          viewingMemberVoted: false,
          subscribed: true,
          fogbugz: '',
          checkItems: 4,
          checkItemsChecked: 2,
          comments: 5,
          attachments: 1,
          description: true,
          due: ISO,
          start: ISO,
          dueComplete: false,
          checkItemsEarliestDue: ISO,
          externalSource: { kind: 'email' },
          lastUpdatedByAi: false,
          maliciousAttachments: 0,
        },
        cardRole: 'board',
        checkItemStates: [{ idCheckItem: ID, state: 'complete' }],
        closed: false,
        coordinates: '0,0',
        creationMethod: 'manual',
        dateLastActivity: ISO,
        desc: 'a description',
        descData: { emoji: {} },
        due: ISO,
        dueReminder: 1440,
        idBoard: ID,
        idChecklists: [ID],
        idLabels: [ID],
        idList: ID,
        idMembers: [ID],
        idMembersVoted: [ID],
        idShort: 7,
        idAttachmentCover: ID,
        labels: [{ id: ID, idBoard: ID, name: 'urgent', color: 'red', uses: 1 }],
        limits: {},
        locationName: 'HQ',
        manualCoverAttachment: false,
        mirrorSourceId: null,
        name: 'My card',
        pos: 65535,
        shortLink: 'abc',
        shortUrl: 'https://trello.com/c/abc',
        subscribed: false,
        url: 'https://trello.com/c/abc/my-card',
        cover: {
          idAttachment: null,
          color: null,
          idUploadedBackground: null,
          size: 'normal',
          brightness: 'dark',
          isTemplate: false,
          idPlugin: null,
          yPosition: 0,
        },
        agent: { name: 'Atlas', conversationId: 'conv-1' },
        dueComplete: true,
        email: null,
        isTemplate: false,
        nodeId: 'node-1',
        pinned: false,
        start: ISO,
        idMemberCreator: ID,
        idOrganization: ID,
        originalDesc: null,
        originalName: null,
      });

      // date-coercion turns ISO strings into Date instances
      expect(card.dateLastActivity).toBeInstanceOf(Date);
      expect(card.due).toBeInstanceOf(Date);
      expect(card.cardRole).toBe('board');
      expect(card.labels?.[0].id).toBe(ID);
      expect(card.checkItemStates?.[0].state).toBe('complete');
    });
  });

  describe('Board', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => BoardSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const board = BoardSchema.parse({
        id: ID,
        name: 'My board',
        desc: 'desc',
        descData: { emoji: {} },
        closed: false,
        idMemberCreator: ID,
        idOrganization: ID,
        pinned: false,
        url: 'https://trello.com/b/abc',
        shortUrl: 'https://trello.com/b/abc',
        prefs: {},
        labelNames: { green: 'g', yellow: 'y', red: 'r' },
        limits: {},
        starred: false,
        memberships: [{ id: ID, idMember: ID, memberType: 'admin' }],
        shortLink: 'abc',
        subscribed: false,
        powerUps: ['calendar'],
        dateLastActivity: ISO,
        dateLastView: ISO,
        idTags: [ID],
        datePluginDisable: null,
        creationMethod: null,
        ixUpdate: '10',
        templateGallery: null,
        enterpriseOwned: false,
        idEnterprise: null,
        nodeId: 'node-1',
        premiumFeatures: ['customBoardBackgrounds'],
        myPrefs: {},
        organization: { id: ID, name: 'Acme' },
      });

      expect(board.dateLastActivity).toBeInstanceOf(Date);
      expect(board.memberships?.[0].id).toBe(ID);
      expect(board.organization?.id).toBe(ID);
    });
  });

  describe('TrelloList', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => TrelloListSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const list = TrelloListSchema.parse({
        id: ID,
        name: 'To Do',
        closed: false,
        idBoard: ID,
        pos: 16384,
        subscribed: false,
        softLimit: null,
        color: null,
        type: null,
        datasource: { filter: true },
        limits: {},
        creationMethod: null,
        idOrganization: null,
        nodeId: 'node-1',
      });

      expect(list.id).toBe(ID);
      expect(list.datasource?.filter).toBe(true);
    });
  });

  describe('Member', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => MemberSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const member = MemberSchema.parse({
        id: ID,
        activityBlocked: false,
        avatarHash: 'hash',
        avatarUrl: 'https://trello.com/avatar.png',
        bio: 'bio',
        bioData: { emoji: {} },
        confirmed: true,
        fullName: 'Ada Lovelace',
        idEnterprise: null,
        idMemberReferrer: null,
        idPremOrgsAdmin: [ID],
        initials: 'AL',
        memberType: 'normal',
        nonPublic: {},
        nonPublicAvailable: true,
        products: [110],
        status: 'disconnected',
        url: 'https://trello.com/ada',
        username: 'ada',
        aaEnrolledDate: ISO,
        avatarSource: 'none',
        email: 'ada@example.com',
        gravatarHash: 'gravatar',
        idBoards: [ID],
        idOrganizations: [ID],
        idEnterprisesAdmin: [ID],
        limits: {},
        loginTypes: ['password'],
        marketingOptIn: {},
        messagesDismissed: [],
        oneTimeMessagesDismissed: ['msg'],
        prefs: {},
        trophies: [],
        uploadedAvatarHash: null,
        uploadedAvatarUrl: null,
        premiumFeatures: [],
        isAaMastered: false,
        ixUpdate: '10',
        idBoardsPinned: null,
      });

      expect(member.products).toEqual([110]);
      expect(member.aaEnrolledDate).toBeInstanceOf(Date);
    });
  });

  describe('Action', () => {
    // Action overrides id/idMemberCreator/data/type/date as required strings.
    it('parses a minimal payload (all five required fields)', () => {
      expect(() =>
        ActionSchema.parse({
          id: ID,
          idMemberCreator: ID,
          data: { text: 'payload' },
          type: 'commentCard',
          date: ISO,
        }),
      ).not.toThrow();
    });

    it('rejects a payload missing a required field', () => {
      expect(() => ActionSchema.parse({ id: ID })).toThrow();
    });

    it('parses a maximal payload', () => {
      const action = ActionSchema.parse({
        id: ID,
        idMemberCreator: ID,
        data: { card: { id: ID }, text: 'payload' },
        type: 'commentCard',
        date: ISO,
        limits: {},
        memberCreator: { id: ID, fullName: 'Ada' },
        member: { id: ID },
        appCreator: null,
        entities: [],
        display: {},
      });

      expect(action.id).toBe(ID);
      expect(action.memberCreator?.id).toBe(ID);
    });
  });

  describe('Checklist', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => ChecklistSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload (with nested check items)', () => {
      const checklist = ChecklistSchema.parse({
        id: ID,
        name: 'Steps',
        idBoard: ID,
        idCard: ID,
        pos: 'bottom',
        checkItems: [
          { id: ID, name: 'step 1', pos: 1, state: 'incomplete', due: ISO, dueReminder: 1440, idMember: null },
        ],
        limits: {},
      });

      expect(checklist.checkItems?.[0].id).toBe(ID);
      expect(checklist.checkItems?.[0].due).toBeInstanceOf(Date);
    });
  });

  describe('CheckItem', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => CheckItemSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const item = CheckItemSchema.parse({
        id: ID,
        name: 'step',
        nameData: {},
        pos: 1,
        state: 'complete',
        due: ISO,
        dueReminder: 60,
        idMember: ID,
        limits: {},
      });

      expect(item.due).toBeInstanceOf(Date);
      expect(item.state).toBe('complete');
    });
  });

  describe('CheckItemState', () => {
    it('parses a minimal payload (both required fields)', () => {
      expect(() => CheckItemStateSchema.parse({ idCheckItem: ID, state: 'complete' })).not.toThrow();
    });

    it('rejects a payload missing state', () => {
      expect(() => CheckItemStateSchema.parse({ idCheckItem: ID })).toThrow();
    });
  });

  describe('Label', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => LabelSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const label = LabelSchema.parse({
        id: ID,
        idBoard: ID,
        name: 'urgent',
        color: 'red',
        uses: 12,
        limits: {},
      });

      expect(label.color).toBe('red');
      expect(label.uses).toBe(12);
    });
  });

  describe('Attachment', () => {
    // Attachment requires `id`; `date` is a coercible date (not required).
    it('parses a minimal payload (id only)', () => {
      expect(() => AttachmentSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const attachment = AttachmentSchema.parse({
        id: ID,
        bytes: '1024',
        date: ISO,
        edgeColor: null,
        idMember: ID,
        isUpload: true,
        mimeType: 'image/png',
        previews: [],
        url: 'https://example.com/a.png',
        name: 'a.png',
        fileName: 'a.png',
        isMalicious: false,
        limits: {},
        pos: 1,
      });

      expect(attachment.date).toBeInstanceOf(Date);
      expect(attachment.mimeType).toBe('image/png');
    });
  });

  describe('Organization', () => {
    it('parses a minimal payload (id only)', () => {
      expect(() => OrganizationSchema.parse({ id: ID })).not.toThrow();
    });

    it('parses a maximal payload', () => {
      const org = OrganizationSchema.parse({
        id: ID,
        name: 'acme',
        displayName: 'Acme Inc',
        desc: 'desc',
        descData: { emoji: {} },
        url: 'https://trello.com/acme',
        website: null,
        prefs: {},
        limits: {},
        logoHash: null,
        logoUrl: null,
        products: [110],
        powerUps: [1],
        idBoards: [ID],
        memberships: [{ id: ID, idMember: ID }],
        billableMemberCount: 3,
        activeMembershipCount: null,
        idMemberCreator: null,
        membersCount: 5,
      });

      expect(org.products).toEqual([110]);
      expect(org.memberships?.[0].id).toBe(ID);
    });
  });
});
