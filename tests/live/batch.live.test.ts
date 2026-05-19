import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Batch', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let cardId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('batch-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    const list = await trello.lists.createList({
      name: testName('batch-list'),
      idBoard: boardId,
    });

    const card = await trello.cards.createCard({
      name: testName('batch-card'),
      idList: list.id,
    });

    cardId = card.id;
  });

  afterAll(() => tracker.cleanup());

  describe('run', () => {
    it('returns typed results for multiple resources', async () => {
      const [board, member] = await trello.batch.run($ => [
        $.boards.getBoard({ id: boardId }),
        $.members.getMember({ id: 'me' }),
      ] as const);

      expect(board.id).toBe(boardId);
      expect(board.name).toContain('batch-suite');
      expect(typeof member.id).toBe('string');
      expect(typeof member.username).toBe('string');
    });

    it('results are returned in the same order as requests', async () => {
      const [card, board] = await trello.batch.run($ => [
        $.cards.getCard({ id: cardId }),
        $.boards.getBoard({ id: boardId }),
      ] as const);

      expect(card.id).toBe(cardId);
      expect(board.id).toBe(boardId);
    });

    it('handles a single request', async () => {
      const [board] = await trello.batch.run($ => [
        $.boards.getBoard({ id: boardId }),
      ] as const);

      expect(board.id).toBe(boardId);
    });

    it('handles 10 requests in one call', async () => {
      const [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9] = await trello.batch.run($ => [
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
        $.boards.getBoard({ id: boardId }),
      ] as const);

      for (const board of [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9]) {
        expect(board.id).toBe(boardId);
      }
    });

    it('rejects when a batched resource returns an error', async () => {
      await expect(
        trello.batch.run($ => [
          $.boards.getBoard({ id: boardId }),
          $.boards.getBoard({ id: '000000000000000000000000' }),
        ] as const),
      ).rejects.toThrow('Batch request failed');
    });
  });
});
