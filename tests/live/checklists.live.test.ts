import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Checklists', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let cardId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('checklists-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    const list = await trello.lists.createList({
      name: testName('cl-list'),
      idBoard: boardId,
    });

    const card = await trello.cards.createCard({
      name: testName('cl-card'),
      idList: list.id,
    });

    cardId = card.id;
  });

  afterAll(() => tracker.cleanup());

  // ─── creation ──────────────────────────────────────────────────────────────

  describe('creation', () => {
    let checklistId: string;

    beforeAll(async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('my-checklist'),
      });

      checklistId = cl.id;
    });

    it('creates a checklist and returns an id', () => {
      expect(typeof checklistId).toBe('string');
      expect(checklistId.length).toBeGreaterThan(0);
    });

    it('created checklist is associated with the card', async () => {
      const cl = await trello.checklists.getChecklist({ id: checklistId });
      expect(cl.idCard).toBe(cardId);
    });

    it('created checklist has the correct name', async () => {
      const cl = await trello.checklists.getChecklist({ id: checklistId });
      expect(cl.name).toContain('my-checklist');
    });

    it('checklist items list is empty after creation', async () => {
      const items = await trello.checklists.getChecklistItems({ id: checklistId });
      expect(Array.isArray(items)).toBe(true);
      expect(items.length).toBe(0);
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    let checklistId: string;

    beforeAll(async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('mutation-checklist'),
      });

      checklistId = cl.id;
    });

    it('updateChecklist returns the updated Checklist', async () => {
      const newName = testName('mutation-checklist-renamed');
      const updated = await trello.checklists.updateChecklist({ id: checklistId, name: newName });
      expect(updated.id).toBe(checklistId);
      expect(updated.name).toBe(newName);
    });
  });

  // ─── fields ────────────────────────────────────────────────────────────────

  describe('fields', () => {
    let checklistId: string;

    beforeAll(async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('fields-checklist'),
      });

      checklistId = cl.id;
    });

    it('getChecklistField returns _value for name field', async () => {
      const result = await trello.checklists.getChecklistField<string>({ id: checklistId, field: 'name' });
      expect(typeof result._value).toBe('string');
      expect(result._value).toContain('fields-checklist');
    });

    it('updateChecklistField updates the name and returns the Checklist', async () => {
      const newName = testName('fields-checklist-renamed');
      const updated = await trello.checklists.updateChecklistField({
        id: checklistId,
        field: 'name',
        value: newName,
      });
      expect(updated.id).toBe(checklistId);
      expect(updated.name).toBe(newName);
    });
  });

  // ─── board and cards ───────────────────────────────────────────────────────

  describe('board and cards', () => {
    let checklistId: string;

    beforeAll(async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('board-cards-checklist'),
      });

      checklistId = cl.id;
    });

    it('getChecklistBoard returns the board the checklist belongs to', async () => {
      const board = await trello.checklists.getChecklistBoard({ id: checklistId });
      expect(board.id).toBe(boardId);
    });

    it('getChecklistCards returns an array containing the parent card', async () => {
      const cards = await trello.checklists.getChecklistCards({ id: checklistId });
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.some(c => c.id === cardId)).toBe(true);
    });
  });

  // ─── items ─────────────────────────────────────────────────────────────────

  describe('items', () => {
    let checklistId: string;
    let itemId: string;

    beforeAll(async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('items-checklist'),
      });

      checklistId = cl.id;

      const item = await trello.checklists.createChecklistItem({
        id: checklistId,
        name: testName('item-one'),
      });

      itemId = item.id;
    });

    it('creates an item and returns an id', () => {
      expect(typeof itemId).toBe('string');
      expect(itemId.length).toBeGreaterThan(0);
    });

    it('item appears in checklist items list', async () => {
      const items = await trello.checklists.getChecklistItems({ id: checklistId });
      expect(items.some(i => i.id === itemId)).toBe(true);
    });

    it('item is in incomplete state by default', async () => {
      const items = await trello.checklists.getChecklistItems({ id: checklistId });
      const item = items.find(i => i.id === itemId);
      expect(item?.state).toBe('incomplete');
    });

    it('getChecklistItem returns the item by id', async () => {
      const item = await trello.checklists.getChecklistItem({ id: checklistId, idCheckItem: itemId });
      expect(item.id).toBe(itemId);
      expect(typeof item.state).toBe('string');
    });

    it('deletes the item and it disappears from the list', async () => {
      await trello.checklists.deleteChecklistItem({ id: checklistId, idCheckItem: itemId });
      const items = await trello.checklists.getChecklistItems({ id: checklistId });
      expect(items.some(i => i.id === itemId)).toBe(false);
    });
  });

  // ─── deletion ──────────────────────────────────────────────────────────────

  describe('deletion', () => {
    it('deletes a checklist and subsequent retrieval throws', async () => {
      const cl = await trello.checklists.createChecklist({
        idCard: cardId,
        name: testName('to-be-deleted'),
      });

      await trello.checklists.deleteChecklist({ id: cl.id });

      await expect(trello.checklists.getChecklist({ id: cl.id })).rejects.toThrow();
    });
  });
});
