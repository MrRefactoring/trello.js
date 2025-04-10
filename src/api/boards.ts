import type { Client, Request } from '~/interfaces';
import {
  BoardSchema,
  type Board,
  type CreateBoard,
  type CreateCustomField,
  type UpdateCustomField,
} from '~/schemas/api/boards';
import {
  CustomFieldSchema,
  CustomFieldsSchema,
  CustomFieldOptionSchema,
  type TrelloId,
} from '~/schemas/common';
import { Members } from './members';

export class Boards {
  private membersClient: Members;

  constructor(private client: Client) {
    this.membersClient = new Members(this.client);
  }

  /** Create a new board. */
  async create(board: CreateBoard) {
    const request: Request = {
      url: '/boards',
      method: 'POST',
      query: board,
    };

    return this.client.sendRequest(request, BoardSchema);
  }

  /**
   * Get all boards for the current member.
   */
  async getAll() {
    const boardsId = await this.membersClient.getBoards('me');

    const boards: Board[] = [];

    for (const { id } of boardsId) {
      const board = await this.get(id);
      boards.push(board);
    }

    return boards;
  }

  /**
   * Request a single board.
   * @param {TrelloId} boardId - The ID of the board to retrieve
   */
  async get(boardId: TrelloId) {
    const request: Request = {
      url: `/boards/${boardId}`,
      method: 'GET',
      // todo additional queries
    };

    return this.client.sendRequest(request, BoardSchema);
  }

  /**
   * Delete a board.
   * @param {TrelloId} boardId - The ID of the board to delete
   */
  async delete(boardId: TrelloId): Promise<void> {
    const request: Request = {
      url: `/boards/${boardId}`,
      method: 'DELETE',
    };

    await this.client.sendRequest(request);
  }

  /** Create a new Custom Field on a board. */
  async createCustomField(customField: CreateCustomField) {
    const request: Request = {
      url: '/customFields',
      method: 'POST',
      body: {
        idModel: customField.boardId,
        modelType: 'board',
        name: customField.name,
        type: customField.type,
        pos: customField.pos,
        display_cardFront: customField.cardFront ?? true,
        options: customField.type === 'list' ? customField.options : undefined,
      },
    };

    return this.client.sendRequest(request, CustomFieldSchema);
  }

  /** Get the Custom Field Definitions that exist on a board. */
  async getAllCustomFields(boardId: TrelloId) {
    const request: Request = {
      url: `/boards/${boardId}/customFields`,
      method: 'GET',
    };

    return this.client.sendRequest(request, CustomFieldsSchema);
  }

  /**
   * Get a specific custom field by its ID.
   * @param {TrelloId} customFieldId - The ID of the custom field to retrieve
   */
  async getCustomField(customFieldId: TrelloId) {
    const request: Request = {
      url: `/customFields/${customFieldId}`,
      method: 'GET',
    };

    return this.client.sendRequest(request, CustomFieldSchema);
  }

  /**
   * Update a custom field.
   */
  async updateCustomField(customField: UpdateCustomField) {
    const request: Request = {
      url: `/customFields/${customField.id}`,
      method: 'PUT',
      body: {
        name: customField.name,
        pos: customField.pos,
        'display/cardFront': customField.cardFront,
      },
    };

    return this.client.sendRequest(request, CustomFieldSchema);
  }

  /**
   * Delete a custom field.
   * @param {TrelloId} customFieldId - The ID of the custom field to delete
   */
  async deleteCustomField(customFieldId: TrelloId): Promise<void> {
    const request: Request = {
      url: `/customFields/${customFieldId}`,
      method: 'DELETE',
    };

    await this.client.sendRequest(request);
  }

  async getAllCustomFieldOptions(customFieldId: TrelloId) {
    const request: Request = {
      url: `/customFields/${customFieldId}/options`,
      method: 'GET',
    };

    return this.client.sendRequest(request, CustomFieldOptionSchema.array());
  }
}
