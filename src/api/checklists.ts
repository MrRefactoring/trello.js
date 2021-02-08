import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Checklists {
  constructor(private client: Client) { }

  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback: Callback<T>): Promise<void>;
  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback?: undefined): Promise<T>;
  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/checklists',
      method: 'POST',
      params: {
        idCard: parameters.idCard,
        name: parameters.name,
        pos: parameters.pos,
        idChecklistSource: parameters.idChecklistSource,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postChecklists' });
  }

  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback: Callback<T>): Promise<void>;
  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback?: undefined): Promise<T>;
  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'GET',
      params: {
        cards: parameters.cards,
        checkItems: parameters.checkItems,
        checkItem_fields: parameters.checkItem_fields,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsId' });
  }

  /**
   * Update an existing checklist. */
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback: Callback<T>): Promise<void>;
  /**
   * Update an existing checklist. */
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback?: undefined): Promise<T>;
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putCheclistsId' });
  }

  /**
   * Delete a checklist */
  async deleteChecklistsId<T = any>(parameters: Parameters.DeleteChecklistsId, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist */
  async deleteChecklistsId<T = any>(parameters: Parameters.DeleteChecklistsId, callback?: undefined): Promise<T>;
  async deleteChecklistsId<T = any>(parameters: Parameters.DeleteChecklistsId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklistsId' });
  }

  async getChecklistsIdField<T = any>(parameters: Parameters.GetChecklistsIdField, callback: Callback<T>): Promise<void>;
  async getChecklistsIdField<T = any>(parameters: Parameters.GetChecklistsIdField, callback?: undefined): Promise<T>;
  async getChecklistsIdField<T = any>(parameters: Parameters.GetChecklistsIdField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdField' });
  }

  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback: Callback<T>): Promise<void>;
  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback?: undefined): Promise<T>;
  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'putChecklistsIdField' });
  }

  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback: Callback<T>): Promise<void>;
  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback?: undefined): Promise<T>;
  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdBoard' });
  }

  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback?: undefined): Promise<T>;
  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/cards`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCards' });
  }

  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback?: undefined): Promise<T>;
  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCheckitems' });
  }

  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback: Callback<T>): Promise<void>;
  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback?: undefined): Promise<T>;
  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'POST',
      params: {
        name: parameters.name,
        pos: parameters.pos,
        checked: parameters.checked,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postChecklistsIdCheckitems' });
  }

  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback?: undefined): Promise<T>;
  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCheckitemsIdcheckitem' });
  }

  /**
   * Remove an item from a checklist */
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.DeleteChecklistsIdCheckitemsIdcheckitem, callback: Callback<T>): Promise<void>;
  /**
   * Remove an item from a checklist */
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.DeleteChecklistsIdCheckitemsIdcheckitem, callback?: undefined): Promise<T>;
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.DeleteChecklistsIdCheckitemsIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklistsIdCheckitemsIdcheckitem' });
  }
}
