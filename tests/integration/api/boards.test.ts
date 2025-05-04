import { TrelloClient } from '~';
import { describe, it, expect } from 'vitest';
import { config } from '~tests/integration/config';
import type { CustomFields } from '~/schemas/common';
import type { Board, CreateBoard } from '~/schemas/api/boards';

// Mock data
const mockBoardInput: CreateBoard = {
  name: 'Integration Test Board',
};

describe('Boards Service Integration Tests', () => {
  let board: Board | undefined;
  let customFields: CustomFields | undefined;
  const trelloClient = new TrelloClient(config);

  it('should successfully create a board with valid input', async () => {
    board = await trelloClient.boards.create(mockBoardInput);

    expect(board).toBeDefined();
    expect(board.name).toBe(mockBoardInput.name);
  });

  it('should successfully get all boards', async () => {
    const boards = await trelloClient.boards.getAll();

    expect(boards).toBeDefined();
    expect(boards.length).greaterThan(0);
    expect(boards.find(b => b.id === board?.id)).toBeDefined();
  });

  describe('Custom Fields', () => {
    it('should successfully create number custom field', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'number',
        name: 'Quantity 📦',
        boardId: board!.id,
      });

      expect(customField).toBeDefined();
      expect(customField.type).toBe('number');
    });

    it('should successfully create text custom field', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'text',
        name: 'Notes ✏️',
        boardId: board!.id,
      });

      expect(customField).toBeDefined();
      expect(customField.type).toBe('text');
    });

    it('should successfully create checkbox custom field', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'checkbox',
        boardId: board!.id,
        name: 'Done ✅',
      });

      expect(customField).toBeDefined();
      expect(customField.type).toBe('checkbox');
    });

    it('should successfully create list custom field with empty options', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'list',
        boardId: board!.id,
        name: 'Empty Category 🏷️',
        pos: 0,
      });

      expect(customField).toBeDefined();
      expect(customField.type).toBe('list');
    });

    it('should successfully create list custom field with fulfilled options', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'list',
        boardId: board!.id,
        name: 'Priority 🚨️',
        pos: 'top',
        options: [
          {
            value: {
              text: 'High',
            },
          },
          {
            value: {
              text: 'Medium',
            },
            color: 'orange',
          },
          {
            value: {
              text: 'Low',
            },
            color: 'green',
            pos: 1,
          },
          {
            value: {
              text: 'Lower',
            },
            color: 'none'
          }
        ],
      });

      expect(customField).toBeDefined();
    });

    it('should successfully create date custom field', async () => {
      const customField = await trelloClient.boards.createCustomField({
        type: 'date',
        boardId: board!.id,
        name: 'Due Date ⏰',
      });

      expect(customField).toBeDefined();
      expect(customField.type).toBe('date');
    });

    it('should successfully get all custom fields', async () => {
      customFields = await trelloClient.boards.getAllCustomFields(board!.id);

      expect(customFields).toBeDefined();
      expect(customFields.length).toBe(6);
    });

    it('should successfully get list custom field', async () => {
      const customField = await trelloClient.boards.getCustomField(customFields![0].id);

      expect(customField).toBeDefined();
      expect(customField.type).toBe('list');

      if (customField.type === 'list') {
        expect(customField.options.length).toBe(4);
      }
    });

    it('should successfully update list custom fields', async () => {
      const customField = await trelloClient.boards.updateCustomField({
        id: customFields![0].id,
        name: 'Updated List Custom Field',
      });

      expect(customField).toBeDefined();
      expect(customField.name).toBe('Updated List Custom Field');
    });

    it('should successfully get list custom field options', async () => {
      const options = await trelloClient.boards.getAllCustomFieldOptions(customFields![0].id);

      console.log(options);
    });

    it('should successfully delete list custom fields', async () => {
      await trelloClient.boards.deleteCustomField(customFields![0].id);
    });
  });

  it('should successfully delete a board', async () => {
    await trelloClient.boards.delete(board!.id);
  });
});
