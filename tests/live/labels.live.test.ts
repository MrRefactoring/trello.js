import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('Labels', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('labels-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });
  });

  afterAll(() => tracker.cleanup());

  // ─── creation ──────────────────────────────────────────────────────────────

  describe('creation', () => {
    let labelId: string;

    beforeAll(async () => {
      const label = await trello.labels.createLabel({
        name: testName('my-label'),
        color: 'blue',
        idBoard: boardId,
      });

      labelId = label.id;
    });

    it('creates a label and returns an id', () => {
      expect(typeof labelId).toBe('string');
      expect(labelId.length).toBeGreaterThan(0);
    });

    it('getLabel returns the label by id', async () => {
      const label = await trello.labels.getLabel({ id: labelId });
      expect(label.id).toBe(labelId);
    });

    it('created label has the correct name', async () => {
      const label = await trello.labels.getLabel({ id: labelId });
      expect(label.name).toContain('my-label');
    });

    it('created label has the correct color', async () => {
      const label = await trello.labels.getLabel({ id: labelId });
      expect(label.color).toBe('blue');
    });

    it('created label belongs to the board', async () => {
      const label = await trello.labels.getLabel({ id: labelId });
      expect(label.idBoard).toBe(boardId);
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    let labelId: string;

    beforeAll(async () => {
      const label = await trello.labels.createLabel({
        name: testName('mutation-label'),
        color: 'green',
        idBoard: boardId,
      });

      labelId = label.id;
    });

    it('updateLabel returns the updated Label with new name', async () => {
      const newName = testName('mutation-label-renamed');
      const updated = await trello.labels.updateLabel({ id: labelId, name: newName });
      expect(updated.id).toBe(labelId);
      expect(updated.name).toBe(newName);
    });

    it('updateLabel returns the updated Label with new color', async () => {
      const updated = await trello.labels.updateLabel({ id: labelId, color: 'red' });
      expect(updated.id).toBe(labelId);
      expect(updated.color).toBe('red');
    });
  });

  // ─── field update ──────────────────────────────────────────────────────────

  describe('field update', () => {
    let labelId: string;

    beforeAll(async () => {
      const label = await trello.labels.createLabel({
        name: testName('field-label'),
        color: 'yellow',
        idBoard: boardId,
      });

      labelId = label.id;
    });

    it('updateLabelField updates name and returns the Label', async () => {
      const newName = testName('field-label-renamed');
      const updated = await trello.labels.updateLabelField({ id: labelId, field: 'name', value: newName });
      expect(updated.id).toBe(labelId);
      expect(updated.name).toBe(newName);
    });

    it('updateLabelField updates color and returns the Label', async () => {
      const updated = await trello.labels.updateLabelField({ id: labelId, field: 'color', value: 'purple' });
      expect(updated.id).toBe(labelId);
      expect(updated.color).toBe('purple');
    });
  });

  // ─── deletion ──────────────────────────────────────────────────────────────

  describe('deletion', () => {
    it('deletes a label and subsequent retrieval throws', async () => {
      const label = await trello.labels.createLabel({
        name: testName('to-delete-label'),
        color: 'orange',
        idBoard: boardId,
      });

      await trello.labels.deleteLabel({ id: label.id });

      await expect(trello.labels.getLabel({ id: label.id })).rejects.toThrow();
    });
  });

  // ─── board labels ──────────────────────────────────────────────────────────

  describe('board labels', () => {
    it('getBoardLabels includes created labels', async () => {
      const label = await trello.labels.createLabel({
        name: testName('board-label'),
        color: 'purple',
        idBoard: boardId,
      });

      const labels = await trello.boards.getBoardLabels({ id: boardId });

      expect(Array.isArray(labels)).toBe(true);
      expect(labels.some(l => l.id === label.id)).toBe(true);
    });
  });
});
