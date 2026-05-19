import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient, getMember2Id, getMember2Email } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Boards', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let listId: string;
  let cardId: string;
  let membershipId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('boards-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    const list = await trello.lists.createList({
      name: testName('board-list'),
      idBoard: boardId,
    });
    listId = list.id;

    const card = await trello.cards.createCard({
      name: testName('board-card'),
      idList: listId,
    });
    cardId = card.id;

    await trello.cards.createCardComment({ id: cardId, text: testName('board-comment') });

    const memberships = await trello.boards.getBoardMemberships({ id: boardId });
    membershipId = memberships[0].id;
  });

  afterAll(() => tracker.cleanup());

  // ─── retrieval ─────────────────────────────────────────────────────────────

  describe('retrieval', () => {
    it('fetches the created board by id', async () => {
      const board = await trello.boards.getBoard({ id: boardId });
      expect(board.id).toBe(boardId);
    });

    it('board name matches what was requested', async () => {
      const board = await trello.boards.getBoard({ id: boardId });
      expect(board.name).toContain('boards-suite');
    });

    it('board is not closed after creation', async () => {
      const board = await trello.boards.getBoard({ id: boardId });
      expect(board.closed).toBe(false);
    });

    it('board is private', async () => {
      const board = await trello.boards.getBoard({ id: boardId });
      expect(board.prefs?.permissionLevel).toBe('private');
    });

    it('getBoardField returns _value for name field', async () => {
      const result = await trello.boards.getBoardField<string>({ id: boardId, field: 'name' });
      expect(typeof result._value).toBe('string');
      expect(result._value).toContain('boards-suite');
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    it('updateBoard returns the updated Board', async () => {
      const newName = testName('boards-suite-renamed');
      const updated = await trello.boards.updateBoard({ id: boardId, name: newName });
      expect(updated.id).toBe(boardId);
      expect(updated.name).toBe(newName);
    });

    it('updateBoard desc change is observable on re-fetch', async () => {
      const desc = 'live test description';
      await trello.boards.updateBoard({ id: boardId, desc });
      const board = await trello.boards.getBoard({ id: boardId });
      expect(board.desc).toBe(desc);
    });

    it('archives and unarchives the board', async () => {
      await trello.boards.updateBoard({ id: boardId, closed: true });
      const archived = await trello.boards.getBoard({ id: boardId });
      expect(archived.closed).toBe(true);

      await trello.boards.updateBoard({ id: boardId, closed: false });
      const restored = await trello.boards.getBoard({ id: boardId });
      expect(restored.closed).toBe(false);
    });
  });

  // ─── actions ───────────────────────────────────────────────────────────────

  describe('actions', () => {
    it('getBoardActions returns an array of actions', async () => {
      const actions = await trello.boards.getBoardActions({ boardId });
      expect(Array.isArray(actions)).toBe(true);
      expect(actions.length).toBeGreaterThan(0);
    });

    it('getBoardActions results have expected action fields', async () => {
      const actions = await trello.boards.getBoardActions({ boardId });
      const first = actions[0];
      expect(typeof first.id).toBe('string');
      expect(typeof first.type).toBe('string');
    });
  });

  // ─── members ───────────────────────────────────────────────────────────────

  describe('members', () => {
    it('getBoardMemberships returns an array with required fields', async () => {
      const memberships = await trello.boards.getBoardMemberships({ id: boardId });
      expect(Array.isArray(memberships)).toBe(true);
      expect(memberships.length).toBeGreaterThan(0);
      const first = memberships[0];
      expect(typeof first.id).toBe('string');
      expect(typeof first.idMember).toBe('string');
      expect(typeof first.memberType).toBe('string');
    });

    it('getBoardMembers returns an array containing the creator', async () => {
      const members = await trello.boards.getBoardMembers({ id: boardId });
      expect(Array.isArray(members)).toBe(true);
      expect(members.length).toBeGreaterThan(0);
      expect(typeof members[0].id).toBe('string');
    });

    it('updateBoardMembership returns the updated membership', async () => {
      const updated = await trello.boards.updateBoardMembership({
        id: boardId,
        idMembership: membershipId,
        type: 'admin',
      });
      expect(updated.id).toBe(membershipId);
      expect(updated.memberType).toBe('admin');
    });

    it('inviteBoardMember adds the second member by email and returns BoardMembersResult', async () => {
      const result = await trello.boards.inviteBoardMember({
        id: boardId,
        email: getMember2Email(),
        type: 'normal',
      });
      expect(typeof result.id).toBe('string');
      expect(result.members.some(m => m.id === getMember2Id())).toBe(true);
    });

    it('updateBoardMember changes the second member role to admin', async () => {
      const result = await trello.boards.updateBoardMember({
        id: boardId,
        idMember: getMember2Id(),
        type: 'admin',
      });
      expect(typeof result.id).toBe('string');
      const membership = result.memberships.find(ms => ms.idMember === getMember2Id());
      expect(membership?.memberType).toBe('admin');
    });

    it('removeBoardMember removes the second member', async () => {
      const result = await trello.boards.removeBoardMember({
        id: boardId,
        idMember: getMember2Id(),
      });
      expect(result.members.some(m => m.id === getMember2Id())).toBe(false);
    });
  });

  // ─── cards ─────────────────────────────────────────────────────────────────

  describe('cards', () => {
    it('getBoardCards returns the created card', async () => {
      const cards = await trello.boards.getBoardCards({ id: boardId });
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.some(c => c.id === cardId)).toBe(true);
    });

    it('getBoardCardsByFilter(open) includes the open card', async () => {
      const cards = await trello.boards.getBoardCardsByFilter({ id: boardId, filter: 'open' });
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.some(c => c.id === cardId)).toBe(true);
    });

    it('getBoardCardsByFilter(closed) does not include the open card', async () => {
      const cards = await trello.boards.getBoardCardsByFilter({ id: boardId, filter: 'closed' });
      expect(cards.some(c => c.id === cardId)).toBe(false);
    });
  });

  // ─── checklists ────────────────────────────────────────────────────────────

  describe('checklists', () => {
    it('getBoardChecklists returns checklists after one is created', async () => {
      await trello.checklists.createChecklist({ idCard: cardId, name: testName('board-checklist') });
      const checklists = await trello.boards.getBoardChecklists({ id: boardId });
      expect(Array.isArray(checklists)).toBe(true);
      expect(checklists.length).toBeGreaterThan(0);
      expect(typeof checklists[0].id).toBe('string');
    });
  });

  // ─── labels ────────────────────────────────────────────────────────────────

  describe('labels', () => {
    it('getBoardLabels returns an array of labels', async () => {
      const labels = await trello.boards.getBoardLabels({ id: boardId });
      expect(Array.isArray(labels)).toBe(true);
    });

    it('createBoardLabel returns a label with correct name', async () => {
      const label = await trello.boards.createBoardLabel({
        id: boardId,
        name: testName('board-label'),
        color: 'red',
      });
      expect(typeof label.id).toBe('string');
      expect(label.name).toContain('board-label');
      expect(label.idBoard).toBe(boardId);
    });
  });

  // ─── lists ─────────────────────────────────────────────────────────────────

  describe('list management', () => {
    it('createBoardList returns the created list', async () => {
      const list = await trello.boards.createBoardList({
        id: boardId,
        name: testName('board-created-list'),
      });
      expect(typeof list.id).toBe('string');
      expect(list.name).toContain('board-created-list');
      expect(list.idBoard).toBe(boardId);
    });

    it('getBoardLists returns the lists on the board', async () => {
      const lists = await trello.boards.getBoardLists({ id: boardId });
      expect(Array.isArray(lists)).toBe(true);
      expect(lists.some(l => l.id === listId)).toBe(true);
    });

    it('getBoardListsByFilter(open) includes open list', async () => {
      const lists = await trello.boards.getBoardListsByFilter({ id: boardId, filter: 'open' });
      expect(Array.isArray(lists)).toBe(true);
      expect(lists.some(l => l.id === listId)).toBe(true);
    });

    it('getBoardListsByFilter(closed) excludes open list', async () => {
      const lists = await trello.boards.getBoardListsByFilter({ id: boardId, filter: 'closed' });
      expect(lists.some(l => l.id === listId)).toBe(false);
    });
  });

  // ─── stars ─────────────────────────────────────────────────────────────────

  describe('stars', () => {
    it('getBoardStars returns an array', async () => {
      const stars = await trello.boards.getBoardStars({ boardId });
      expect(Array.isArray(stars)).toBe(true);
    });
  });

  // ─── preferences ───────────────────────────────────────────────────────────

  describe('preferences', () => {
    it('updateBoardShowSidebar returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardShowSidebar({ id: boardId, value: true });
      expect(typeof prefs.showSidebar).toBe('boolean');
      expect(prefs.showSidebar).toBe(true);
    });

    it('updateBoardShowSidebarMembers returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardShowSidebarMembers({ id: boardId, value: true });
      expect(typeof prefs.showSidebarMembers).toBe('boolean');
    });

    it('updateBoardShowSidebarBoardActions returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardShowSidebarBoardActions({ id: boardId, value: true });
      expect(typeof prefs.showSidebarBoardActions).toBe('boolean');
    });

    it('updateBoardShowSidebarActivity returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardShowSidebarActivity({ id: boardId, value: true });
      expect(typeof prefs.showSidebarActivity).toBe('boolean');
    });

    it('updateBoardEmailPosition returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardEmailPosition({ id: boardId, value: 'bottom' });
      expect(typeof prefs.emailPosition).toBe('string');
      expect(prefs.emailPosition).toBe('bottom');
    });

    it('updateBoardEmailList returns BoardMyPrefs', async () => {
      const prefs = await trello.boards.updateBoardEmailList({ id: boardId, value: listId });
      expect(typeof prefs.idEmailList).toBe('string');
      expect(prefs.idEmailList).toBe(listId);
    });
  });

  // ─── keys ──────────────────────────────────────────────────────────────────

  describe('keys', () => {
    it('generateBoardEmailKey returns the Board', async () => {
      const board = await trello.boards.generateBoardEmailKey({ id: boardId });
      expect(board.id).toBe(boardId);
    });

    // generateBoardCalendarKey returns 403 "Can't generate calendarKey" regardless of
    // calendarFeedEnabled — requires the Calendar Power-Up (Trello Premium) to be active.
  });

  // ─── custom fields ─────────────────────────────────────────────────────────

  describe('custom fields', () => {
    it('getBoardCustomFields returns an array', async () => {
      const fields = await trello.boards.getBoardCustomFields({ id: boardId });
      expect(Array.isArray(fields)).toBe(true);
    });
  });

  // ─── plugins ───────────────────────────────────────────────────────────────

  describe('plugins', () => {
    it('getBoardPlugins returns an array', async () => {
      const plugins = await trello.boards.getBoardPlugins({ id: boardId });
      expect(Array.isArray(plugins)).toBe(true);
    });

    it('getBoardPowerUps returns an array', async () => {
      const powerUps = await trello.boards.getBoardPowerUps({ id: boardId });
      expect(Array.isArray(powerUps)).toBe(true);
    });

    // enableBoardPlugin / disableBoardPlugin require a paid Trello plan — not tested
    // addBoardTag requires org tags to exist — not tested
    // inviteBoardMember / updateBoardMember / removeBoardMember require a second account — not tested
    // generateBoardCalendarKey requires calendarFeedEnabled pref — not tested
  });
});
