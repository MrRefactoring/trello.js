import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { TrelloClient } from '../../src/createTrelloClient';
import { getLiveClient } from './setup/client';
import { ResourceTracker } from './setup/resources';
import { testName } from './helpers/naming';

describe('CustomFields', () => {
  let trello!: TrelloClient;
  const tracker = new ResourceTracker();

  let boardId: string;
  let customFieldsAvailable = false;

  beforeAll(async () => {
    trello = getLiveClient();

    const board = await trello.boards.createBoard({
      name: testName('customfields-suite'),
      defaultLists: false,
      prefsPermissionLevel: 'private',
    });

    boardId = board.id;
    tracker.defer(async () => {
      await trello.boards.deleteBoard({ id: boardId });
    });

    // Probe whether Custom Fields are available on this account/board.
    // The Power-Up must be enabled in the Trello UI or via a premium plan.
    try {
      const probe = await trello.customFields.createCustomField({
        idModel: boardId,
        modelType: 'board',
        name: testName('probe-field'),
        type: 'text',
        pos: 'bottom',
      });
      await trello.customFields.deleteCustomField({ id: String(probe.id) });
      customFieldsAvailable = true;
    } catch {
      customFieldsAvailable = false;
    }
  });

  afterAll(() => tracker.cleanup());

  // ─── creation ──────────────────────────────────────────────────────────────

  describe('creation', () => {
    let fieldId: string;

    beforeAll(async () => {
      if (!customFieldsAvailable) return;

      const field = await trello.customFields.createCustomField({
        idModel: boardId,
        modelType: 'board',
        name: testName('text-field'),
        type: 'text',
        pos: 'bottom',
      });

      fieldId = String(field.id);
    });

    it('creates a custom field and returns an id', ({ skip }) => {
      if (!customFieldsAvailable) skip();
      expect(typeof fieldId).toBe('string');
      expect(fieldId.length).toBeGreaterThan(0);
    });

    it('created field has the correct type', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const field = await trello.customFields.getCustomField({ id: fieldId });
      expect(field.type).toBe('text');
    });

    it('created field belongs to the board', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const field = await trello.customFields.getCustomField({ id: fieldId });
      expect(field.idModel).toBe(boardId);
    });

    it('created field has the correct name', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const field = await trello.customFields.getCustomField({ id: fieldId });
      expect(field.name).toContain('text-field');
    });
  });

  // ─── mutation ──────────────────────────────────────────────────────────────

  describe('mutation', () => {
    let fieldId: string;

    beforeAll(async () => {
      if (!customFieldsAvailable) return;

      const field = await trello.customFields.createCustomField({
        idModel: boardId,
        modelType: 'board',
        name: testName('mutation-field'),
        type: 'number',
        pos: 'bottom',
      });

      fieldId = String(field.id);
    });

    it('updateCustomField returns the updated CustomField', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const newName = testName('mutation-field-renamed');
      const updated = await trello.customFields.updateCustomField({ id: fieldId, name: newName });
      expect(String(updated.id)).toBe(fieldId);
      expect(updated.name).toBe(newName);
    });
  });

  // ─── options (list type) ───────────────────────────────────────────────────

  describe('options', () => {
    let fieldId: string;
    let optionId: string;

    beforeAll(async () => {
      if (!customFieldsAvailable) return;

      const field = await trello.customFields.createCustomField({
        idModel: boardId,
        modelType: 'board',
        name: testName('list-field'),
        type: 'list',
        pos: 'bottom',
      });

      fieldId = String(field.id);
    });

    it('createCustomFieldOption returns a CustomFieldOption', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const option = await trello.customFields.createCustomFieldOption({
        id: fieldId,
        value: { text: 'Option A' },
        color: 'green',
        pos: 'bottom',
      });
      expect(typeof option._id).toBe('string');
      optionId = String(option._id);
    });

    it('getCustomFieldOptions returns an array containing the option', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const options = await trello.customFields.getCustomFieldOptions({ id: fieldId });
      expect(Array.isArray(options)).toBe(true);
      expect(options.some(o => String(o._id) === optionId)).toBe(true);
    });

    it('getCustomFieldOption returns the option by id', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const option = await trello.customFields.getCustomFieldOption({
        id: fieldId,
        idCustomFieldOption: optionId,
      });
      expect(String(option._id)).toBe(optionId);
    });

    it('deleteCustomFieldOption removes the option', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      await expect(
        trello.customFields.deleteCustomFieldOption({ id: fieldId, idCustomFieldOption: optionId }),
      ).resolves.not.toThrow();

      const options = await trello.customFields.getCustomFieldOptions({ id: fieldId });
      expect(options.some(o => String(o._id) === optionId)).toBe(false);
    });
  });

  // ─── deletion ──────────────────────────────────────────────────────────────

  describe('deletion', () => {
    it('deletes a custom field and subsequent retrieval throws', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const field = await trello.customFields.createCustomField({
        idModel: boardId,
        modelType: 'board',
        name: testName('to-delete-field'),
        type: 'checkbox',
        pos: 'bottom',
      });
      await trello.customFields.deleteCustomField({ id: String(field.id) });
      await expect(
        trello.customFields.getCustomField({ id: String(field.id) }),
      ).rejects.toThrow();
    });
  });

  // ─── board custom fields ───────────────────────────────────────────────────

  describe('board custom fields', () => {
    it('board reports its custom fields', async ({ skip }) => {
      if (!customFieldsAvailable) skip();
      const fields = await trello.boards.getBoardCustomFields({ id: boardId });
      expect(Array.isArray(fields)).toBe(true);
    });
  });
});
