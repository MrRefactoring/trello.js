import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Lists {
  constructor(private client: Client) { }

  /**
   * Get information about a List */
  async getListsId<T = any>(parameters: Parameters.GetListsId, callback: Callback<T>): Promise<void>;
  /**
   * Get information about a List */
  async getListsId<T = any>(parameters: Parameters.GetListsId, callback?: undefined): Promise<T>;
  async getListsId<T = any>(parameters: Parameters.GetListsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListsId' });
  }

  /**
   * Update the properties of a List */
  async putListsId<T = any>(parameters: Parameters.PutListsId, callback: Callback<T>): Promise<void>;
  /**
   * Update the properties of a List */
  async putListsId<T = any>(parameters: Parameters.PutListsId, callback?: undefined): Promise<T>;
  async putListsId<T = any>(parameters: Parameters.PutListsId, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'putListsId' });
  }

  /**
   * Create a new List on a Board */
  async postLists<T = any>(parameters: Parameters.PostLists, callback: Callback<T>): Promise<void>;
  /**
   * Create a new List on a Board */
  async postLists<T = any>(parameters: Parameters.PostLists, callback?: undefined): Promise<T>;
  async postLists<T = any>(parameters: Parameters.PostLists, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'postLists' });
  }

  /**
   * Archive all cards in a list */
  async postListsIdArchiveallcards<T = any>(parameters: Parameters.PostListsIdArchiveallcards, callback: Callback<T>): Promise<void>;
  /**
   * Archive all cards in a list */
  async postListsIdArchiveallcards<T = any>(parameters: Parameters.PostListsIdArchiveallcards, callback?: undefined): Promise<T>;
  async postListsIdArchiveallcards<T = any>(parameters: Parameters.PostListsIdArchiveallcards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/archiveAllCards`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'postListsIdArchiveallcards' });
  }

  /**
   * Move all Cards in a List */
  async postListsIdMoveallcards<T = any>(parameters: Parameters.PostListsIdMoveallcards, callback: Callback<T>): Promise<void>;
  /**
   * Move all Cards in a List */
  async postListsIdMoveallcards<T = any>(parameters: Parameters.PostListsIdMoveallcards, callback?: undefined): Promise<T>;
  async postListsIdMoveallcards<T = any>(parameters: Parameters.PostListsIdMoveallcards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/moveAllCards`,
      method: 'POST',
      params: {
        idBoard: parameters.idBoard,
        idList: parameters.idList,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postListsIdMoveallcards' });
  }

  /**
   * Archive or unarchive a list */
  async putListsIdClosed<T = any>(parameters: Parameters.PutListsIdClosed, callback: Callback<T>): Promise<void>;
  /**
   * Archive or unarchive a list */
  async putListsIdClosed<T = any>(parameters: Parameters.PutListsIdClosed, callback?: undefined): Promise<T>;
  async putListsIdClosed<T = any>(parameters: Parameters.PutListsIdClosed, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/closed`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putListsIdClosed' });
  }

  /**
   * Move a List to a different Board */
  async putIdIdboard<T = any>(parameters: Parameters.PutIdIdboard, callback: Callback<T>): Promise<void>;
  /**
   * Move a List to a different Board */
  async putIdIdboard<T = any>(parameters: Parameters.PutIdIdboard, callback?: undefined): Promise<T>;
  async putIdIdboard<T = any>(parameters: Parameters.PutIdIdboard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/idBoard`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putIdIdboard' });
  }

  /**
   * Rename a list */
  async putListsIdField<T = any>(parameters: Parameters.PutListsIdField, callback: Callback<T>): Promise<void>;
  /**
   * Rename a list */
  async putListsIdField<T = any>(parameters: Parameters.PutListsIdField, callback?: undefined): Promise<T>;
  async putListsIdField<T = any>(parameters: Parameters.PutListsIdField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putListsIdField' });
  }

  /**
   * Get the Actions on a List */
  async getListsIdActions<T = any>(parameters: Parameters.GetListsIdActions, callback: Callback<T>): Promise<void>;
  /**
   * Get the Actions on a List */
  async getListsIdActions<T = any>(parameters: Parameters.GetListsIdActions, callback?: undefined): Promise<T>;
  async getListsIdActions<T = any>(parameters: Parameters.GetListsIdActions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/actions`,
      method: 'GET',
      params: {
        filter: parameters.filter,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListsIdActions' });
  }

  /**
   * Get the board a list is on */
  async getListsIdBoard<T = any>(parameters: Parameters.GetListsIdBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a list is on */
  async getListsIdBoard<T = any>(parameters: Parameters.GetListsIdBoard, callback?: undefined): Promise<T>;
  async getListsIdBoard<T = any>(parameters: Parameters.GetListsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListsIdBoard' });
  }

  /**
   * List the cards in a list */
  async getListsIdCards<T = any>(parameters: Parameters.GetListsIdCards, callback: Callback<T>): Promise<void>;
  /**
   * List the cards in a list */
  async getListsIdCards<T = any>(parameters: Parameters.GetListsIdCards, callback?: undefined): Promise<T>;
  async getListsIdCards<T = any>(parameters: Parameters.GetListsIdCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/lists/${parameters.id}/cards`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getListsIdCards' });
  }
}
