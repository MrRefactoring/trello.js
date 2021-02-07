import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Checklists {
  constructor(private client: Client) { }
  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback: Callback<T>): Promise<void>;
  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback?: undefined): Promise<T>;
  async postChecklists<T = any>(parameters: Parameters.PostChecklists, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/checklists',
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        idCard: parameters.idCard,
        name: parameters.name,
        pos: parameters.pos,
        idChecklistSource: parameters.idChecklistSource,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postChecklists' });
  }
  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback: Callback<T>): Promise<void>;
  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback?: undefined): Promise<T>;
  async getChecklistsId<T = any>(parameters: Parameters.GetChecklistsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        cards: parameters.cards,
        checkItems: parameters.checkItems,
        checkItem_fields: parameters.checkItem_fields,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsId' });
  }
  /**
     * Update an existing checklist. */
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback: Callback<T>): Promise<void>;
  /**
     * Update an existing checklist. */
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback?: undefined): Promise<T>;
  async putCheclistsId<T = any>(parameters: Parameters.PutCheclistsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        name: parameters.name,
        pos: parameters.pos,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putCheclistsId' });
  }
  /**
     * Delete a checklist */
  async deleteChecklistsId<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Delete a checklist */
  async deleteChecklistsId<T = any>(callback?: undefined): Promise<T>;
  async deleteChecklistsId<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklistsId' });
  }
  async getChecklistsIdField<T = any>(callback?: Callback<T>): Promise<void>;
  async getChecklistsIdField<T = any>(callback?: undefined): Promise<T>;
  async getChecklistsIdField<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdField' });
  }
  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback: Callback<T>): Promise<void>;
  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback?: undefined): Promise<T>;
  async putChecklistsIdField<T = any>(parameters: Parameters.PutChecklistsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putChecklistsIdField' });
  }
  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback: Callback<T>): Promise<void>;
  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback?: undefined): Promise<T>;
  async getChecklistsIdBoard<T = any>(parameters: Parameters.GetChecklistsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/board`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdBoard' });
  }
  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback?: undefined): Promise<T>;
  async getChecklistsIdCards<T = any>(parameters: Parameters.GetChecklistsIdCards, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/cards`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCards' });
  }
  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback?: undefined): Promise<T>;
  async getChecklistsIdCheckitems<T = any>(parameters: Parameters.GetChecklistsIdCheckitems, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        filter: parameters.filter,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCheckitems' });
  }
  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback: Callback<T>): Promise<void>;
  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback?: undefined): Promise<T>;
  async postChecklistsIdCheckitems<T = any>(parameters: Parameters.PostChecklistsIdCheckitems, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        name: parameters.name,
        pos: parameters.pos,
        checked: parameters.checked,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postChecklistsIdCheckitems' });
  }
  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback: Callback<T>): Promise<void>;
  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback?: undefined): Promise<T>;
  async getChecklistsIdCheckitemsIdcheckitem<T = any>(parameters: Parameters.GetChecklistsIdCheckitemsIdcheckitem, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistsIdCheckitemsIdcheckitem' });
  }
  /**
     * Remove an item from a checklist */
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Remove an item from a checklist */
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(callback?: undefined): Promise<T>;
  async deleteChecklistsIdCheckitemsIdcheckitem<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklistsIdCheckitemsIdcheckitem' });
  }
}
