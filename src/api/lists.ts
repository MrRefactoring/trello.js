import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Lists {
  constructor(private client: Client) {
  }

  /**
   * Get information about a List */
  async getList<T = unknown>(parameters: Parameters.GetList, callback: Callback<T>): Promise<void>;
  /**
   * Get information about a List */
  async getList<T = unknown>(parameters: Parameters.GetList, callback?: never): Promise<T>;
  async getList<T = unknown>(parameters: Parameters.GetList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getList' });
  }

  /**
   * Update the properties of a List */
  async updateList<T = unknown>(parameters: Parameters.UpdateList, callback: Callback<T>): Promise<void>;
  /**
   * Update the properties of a List */
  async updateList<T = unknown>(parameters: Parameters.UpdateList, callback?: never): Promise<T>;
  async updateList<T = unknown>(parameters: Parameters.UpdateList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        closed: parameters.closed,
        idBoard: parameters.idBoard,
        pos: parameters.pos,
        subscribed: parameters.subscribed,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateList' });
  }

  /**
   * Create a new List on a Board */
  async createList<T = unknown>(parameters: Parameters.CreateList, callback: Callback<T>): Promise<void>;
  /**
   * Create a new List on a Board */
  async createList<T = unknown>(parameters: Parameters.CreateList, callback?: never): Promise<T>;
  async createList<T = unknown>(parameters: Parameters.CreateList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/lists',
      method: 'POST',
      params: {
        name: parameters.name,
        idBoard: parameters.idBoard,
        idListSource: parameters.idListSource,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createList' });
  }

  /**
   * Archive all cards in a list */
  async archiveAllCardsInList<T = unknown>(parameters: Parameters.ArchiveAllCardsInList, callback: Callback<T>): Promise<void>;
  /**
   * Archive all cards in a list */
  async archiveAllCardsInList<T = unknown>(parameters: Parameters.ArchiveAllCardsInList, callback?: never): Promise<T>;
  async archiveAllCardsInList<T = unknown>(parameters: Parameters.ArchiveAllCardsInList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/archiveAllCards`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'archiveAllCardsInList' });
  }

  /**
   * Move all Cards in a List */
  async moveAllCardsInList<T = unknown>(parameters: Parameters.MoveAllCardsInList, callback: Callback<T>): Promise<void>;
  /**
   * Move all Cards in a List */
  async moveAllCardsInList<T = unknown>(parameters: Parameters.MoveAllCardsInList, callback?: never): Promise<T>;
  async moveAllCardsInList<T = unknown>(parameters: Parameters.MoveAllCardsInList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/moveAllCards`,
      method: 'POST',
      params: {
        idBoard: parameters.idBoard,
        idList: parameters.idList,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'moveAllCardsInList' });
  }

  /**
   * Archive or unarchive a list */
  async setListCloseState<T = unknown>(parameters: Parameters.SetListCloseState, callback: Callback<T>): Promise<void>;
  /**
   * Archive or unarchive a list */
  async setListCloseState<T = unknown>(parameters: Parameters.SetListCloseState, callback?: never): Promise<T>;
  async setListCloseState<T = unknown>(parameters: Parameters.SetListCloseState, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/closed`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'setListCloseState' });
  }

  /**
   * Move a List to a different Board */
  async moveListToDifferentBoard<T = unknown>(parameters: Parameters.MoveListToDifferentBoard, callback: Callback<T>): Promise<void>;
  /**
   * Move a List to a different Board */
  async moveListToDifferentBoard<T = unknown>(parameters: Parameters.MoveListToDifferentBoard, callback?: never): Promise<T>;
  async moveListToDifferentBoard<T = unknown>(parameters: Parameters.MoveListToDifferentBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/idBoard`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'moveListToDifferentBoard' });
  }

  /**
   * Rename a list */
  async renameList<T = unknown>(parameters: Parameters.RenameList, callback: Callback<T>): Promise<void>;
  /**
   * Rename a list */
  async renameList<T = unknown>(parameters: Parameters.RenameList, callback?: never): Promise<T>;
  async renameList<T = unknown>(parameters: Parameters.RenameList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'renameList' });
  }

  /**
   * Get the Actions on a List */
  async getListActions<T = unknown>(parameters: Parameters.GetListActions, callback: Callback<T>): Promise<void>;
  /**
   * Get the Actions on a List */
  async getListActions<T = unknown>(parameters: Parameters.GetListActions, callback?: never): Promise<T>;
  async getListActions<T = unknown>(parameters: Parameters.GetListActions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListActions' });
  }

  /**
   * Get the board a list is on */
  async getListBoard<T = unknown>(parameters: Parameters.GetListBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a list is on */
  async getListBoard<T = unknown>(parameters: Parameters.GetListBoard, callback?: never): Promise<T>;
  async getListBoard<T = unknown>(parameters: Parameters.GetListBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListBoard' });
  }

  /**
   * List the cards in a list */
  async getListCards<T = unknown>(parameters: Parameters.GetListCards, callback: Callback<T>): Promise<void>;
  /**
   * List the cards in a list */
  async getListCards<T = unknown>(parameters: Parameters.GetListCards, callback?: never): Promise<T>;
  async getListCards<T = unknown>(parameters: Parameters.GetListCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/cards`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListCards' });
  }
}
