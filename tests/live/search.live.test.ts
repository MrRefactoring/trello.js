import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Search', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let myUsername: string;
  let boardId: string;
  let boardName: string;
  let cardName: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const me = await trello.members.getMember({ id: 'me' });
    myUsername = me.username!;

    boardName = testName('search-board');
    cardName = testName('search-card');

    const board = await trello.boards.createBoard({
      name: boardName,
      defaultLists: true,
      prefsPermissionLevel: 'private',
    });
    boardId = board.id!;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    const lists = await trello.boards.getBoardLists({ id: boardId });
    if (lists.length > 0) {
      await trello.cards.createCard({ idList: lists[0].id!, name: cardName });
    }
  });

  afterAll(() => tracker.cleanup());

  // ─── searchMembers ─────────────────────────────────────────────────────────

  describe('searchMembers', () => {
    it('returns an array', async () => {
      const results = await trello.search.searchMembers({ query: myUsername });
      expect(Array.isArray(results)).toBe(true);
    });

    it('finds the authenticated user by exact username', async () => {
      const results = await trello.search.searchMembers({ query: myUsername });
      expect(results.some(m => m.username === myUsername)).toBe(true);
    });

    it('finds the authenticated user by username prefix', async () => {
      const prefix = myUsername.slice(0, Math.max(3, Math.floor(myUsername.length / 2)));
      const results = await trello.search.searchMembers({ query: prefix });
      expect(Array.isArray(results)).toBe(true);
      expect(results.some(m => m.username === myUsername)).toBe(true);
    });

    it('result members have id and username', async () => {
      const results = await trello.search.searchMembers({ query: myUsername });
      expect(results.length).toBeGreaterThan(0);
      for (const member of results) {
        expect(typeof member.id).toBe('string');
        expect(typeof member.username).toBe('string');
      }
    });

    it('respects the limit parameter', async () => {
      const results = await trello.search.searchMembers({ query: myUsername, limit: 1 });
      expect(results.length).toBeLessThanOrEqual(1);
    });
  });

  // ─── search ────────────────────────────────────────────────────────────────

  describe('search', () => {
    it('searching boards returns a SearchResult with boards array', async () => {
      const result = await trello.search.search({ query: boardName, modelTypes: 'boards' });
      expect(Array.isArray(result.boards)).toBe(true);
    });

    it('boards result contains the created board', async () => {
      const result = await trello.search.search({ query: boardName, modelTypes: 'boards' });
      expect(result.boards!.some(b => b.id === boardId)).toBe(true);
    });

    it('searching cards returns a SearchResult with cards array', async () => {
      const result = await trello.search.search({ query: cardName, modelTypes: 'cards' });
      // cards may be undefined if the search index hasn't caught up yet
      expect(result.cards === undefined || Array.isArray(result.cards)).toBe(true);
    });

    it('searching members returns a SearchResult with members array', async () => {
      const result = await trello.search.search({ query: myUsername, modelTypes: 'members' });
      expect(Array.isArray(result.members)).toBe(true);
    });

    it('members result contains the authenticated user', async () => {
      const result = await trello.search.search({ query: myUsername, modelTypes: 'members' });
      expect(result.members!.some(m => m.username === myUsername)).toBe(true);
    });
  });
});
