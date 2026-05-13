import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Lists', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let board2Id: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const [board, board2] = await Promise.all([
      trello.boards.createBoard({
        name: testName('lists-suite'),
        defaultLists: false,
        prefsPermissionLevel: 'private',
      }),
      trello.boards.createBoard({
        name: testName('lists-suite-2'),
        defaultLists: false,
        prefsPermissionLevel: 'private',
      }),
    ]);

    boardId = board.id;
    board2Id = board2.id;

    tracker.defer(async () => {
      await Promise.all([
        trello.boards.deleteBoard({ id: boardId }),
        trello.boards.deleteBoard({ id: board2Id }),
      ]);
    });
  });

  afterAll(() => tracker.cleanup());

  // ─── creation ──────────────────────────────────────────────────────────────

  describe('creation', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('my-list'),
        idBoard: boardId,
      });

      listId = list.id;
    });

    it('creates a list and returns an id', () => {
      expect(typeof listId).toBe('string');
      expect(listId.length).toBeGreaterThan(0);
    });

    it('getList returns the list by id', async () => {
      const list = await trello.lists.getList({ id: listId });
      expect(list.id).toBe(listId);
    });

    it('created list has the correct name', async () => {
      const list = await trello.lists.getList({ id: listId });
      expect(list.name).toContain('my-list');
    });

    it('created list belongs to the board', async () => {
      const list = await trello.lists.getList({ id: listId });
      expect(list.idBoard).toBe(boardId);
    });

    it('created list is not closed', async () => {
      const list = await trello.lists.getList({ id: listId });
      expect(list.closed).toBe(false);
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('mutation-list'),
        idBoard: boardId,
      });

      listId = list.id;
    });

    it('updateList returns the updated TrelloList with new name', async () => {
      const newName = testName('mutation-list-renamed');
      const updated = await trello.lists.updateList({ id: listId, name: newName });
      expect(updated.id).toBe(listId);
      expect(updated.name).toBe(newName);
    });
  });

  // ─── field update ──────────────────────────────────────────────────────────

  describe('field update', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('field-list'),
        idBoard: boardId,
      });

      listId = list.id;
    });

    it('updateListField updates name and returns the TrelloList', async () => {
      const newName = testName('field-list-renamed');
      const updated = await trello.lists.updateListField({ id: listId, field: 'name', value: newName });
      expect(updated.id).toBe(listId);
      expect(updated.name).toBe(newName);
    });
  });

  // ─── archiving ─────────────────────────────────────────────────────────────

  describe('archiving', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('archive-list'),
        idBoard: boardId,
      });

      listId = list.id;
    });

    it('archiveList returns the TrelloList with closed=true', async () => {
      const updated = await trello.lists.archiveList({ id: listId, value: true });
      expect(updated.id).toBe(listId);
      expect(updated.closed).toBe(true);
    });

    it('unarchiveList returns the TrelloList with closed=false', async () => {
      const updated = await trello.lists.archiveList({ id: listId, value: false });
      expect(updated.id).toBe(listId);
      expect(updated.closed).toBe(false);
    });
  });

  // ─── board ─────────────────────────────────────────────────────────────────

  describe('board', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('board-list'),
        idBoard: boardId,
      });

      listId = list.id;
    });

    it('getListBoard returns the board the list is on', async () => {
      const board = await trello.lists.getListBoard({ id: listId });
      expect(board.id).toBe(boardId);
    });

    it('moveListToBoard moves the list to a different board', async () => {
      const updated = await trello.lists.moveListToBoard({ id: listId, value: board2Id });
      expect(updated.id).toBe(listId);
      expect(updated.idBoard).toBe(board2Id);
    });
  });

  // ─── cards ─────────────────────────────────────────────────────────────────

  describe('cards', () => {
    let listId: string;
    let targetListId: string;

    beforeAll(async () => {
      const [list, targetList] = await Promise.all([
        trello.lists.createList({ name: testName('cards-list'), idBoard: boardId }),
        trello.lists.createList({ name: testName('cards-target'), idBoard: boardId }),
      ]);

      listId = list.id;
      targetListId = targetList.id;

      await Promise.all([
        trello.cards.createCard({ name: testName('card-1'), idList: listId }),
        trello.cards.createCard({ name: testName('card-2'), idList: listId }),
      ]);
    });

    it('getListCards returns the cards in the list', async () => {
      const cards = await trello.lists.getListCards({ id: listId });
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBe(2);
    });

    it('card entries have ids', async () => {
      const cards = await trello.lists.getListCards({ id: listId });
      for (const card of cards) {
        expect(typeof card.id).toBe('string');
      }
    });

    it('moveAllListCards moves all cards to the target list', async () => {
      await trello.lists.moveAllListCards({ id: listId, idBoard: boardId, idList: targetListId });

      const [sourceCards, targetCards] = await Promise.all([
        trello.lists.getListCards({ id: listId }),
        trello.lists.getListCards({ id: targetListId }),
      ]);

      expect(sourceCards.length).toBe(0);
      expect(targetCards.length).toBe(2);
    });

    it('archiveAllListCards archives all cards in the list', async () => {
      await trello.lists.archiveAllListCards({ id: targetListId });

      const cards = await trello.lists.getListCards({ id: targetListId });
      expect(cards.length).toBe(0);
    });
  });

  // ─── actions ───────────────────────────────────────────────────────────────

  describe('actions', () => {
    let listId: string;

    beforeAll(async () => {
      const list = await trello.lists.createList({
        name: testName('actions-list'),
        idBoard: boardId,
      });

      listId = list.id;

      await trello.cards.createCard({ name: testName('actions-card'), idList: listId });
    });

    it('getListActions returns an array', async () => {
      const actions = await trello.lists.getListActions({ id: listId });
      expect(Array.isArray(actions)).toBe(true);
    });

    it('action entries have ids', async () => {
      const actions = await trello.lists.getListActions({ id: listId });
      for (const action of actions) {
        expect(typeof action.id).toBe('string');
      }
    });
  });
});
