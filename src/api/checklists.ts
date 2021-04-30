import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Checklists {
  constructor(private client: Client) {
  }

  async createChecklist<T = unknown>(parameters: Parameters.CreateChecklist, callback: Callback<T>): Promise<void>;
  async createChecklist<T = unknown>(parameters: Parameters.CreateChecklist, callback?: never): Promise<T>;
  async createChecklist<T = unknown>(parameters: Parameters.CreateChecklist, callback?: Callback<T>): Promise<void | T> {
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

    return this.client.sendRequest(config, callback, { methodName: 'createChecklist' });
  }

  async getChecklist<T = unknown>(parameters: Parameters.GetChecklist, callback: Callback<T>): Promise<void>;
  async getChecklist<T = unknown>(parameters: Parameters.GetChecklist, callback?: never): Promise<T>;
  async getChecklist<T = unknown>(parameters: Parameters.GetChecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'GET',
      params: {
        cards: parameters.cards,
        checkItems: parameters.checkItems,
        checkItem_fields: parameters.checkItemFields,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklist' });
  }

  /**
   * Update an existing checklist. */
  async updateChecklist<T = unknown>(parameters: Parameters.UpdateChecklist, callback: Callback<T>): Promise<void>;
  /**
   * Update an existing checklist. */
  async updateChecklist<T = unknown>(parameters: Parameters.UpdateChecklist, callback?: never): Promise<T>;
  async updateChecklist<T = unknown>(parameters: Parameters.UpdateChecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        pos: parameters.pos,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateChecklist' });
  }

  /**
   * Delete a checklist */
  async deleteChecklist<T = unknown>(parameters: Parameters.DeleteChecklist, callback: Callback<T>): Promise<void>;
  /**
   * Delete a checklist */
  async deleteChecklist<T = unknown>(parameters: Parameters.DeleteChecklist, callback?: never): Promise<T>;
  async deleteChecklist<T = unknown>(parameters: Parameters.DeleteChecklist, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklist' });
  }

  async getChecklistField<T = unknown>(parameters: Parameters.GetChecklistField, callback: Callback<T>): Promise<void>;
  async getChecklistField<T = unknown>(parameters: Parameters.GetChecklistField, callback?: never): Promise<T>;
  async getChecklistField<T = unknown>(parameters: Parameters.GetChecklistField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistField' });
  }

  async updateChecklistField<T = unknown>(parameters: Parameters.UpdateChecklistField, callback: Callback<T>): Promise<void>;
  async updateChecklistField<T = unknown>(parameters: Parameters.UpdateChecklistField, callback?: never): Promise<T>;
  async updateChecklistField<T = unknown>(parameters: Parameters.UpdateChecklistField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateChecklistField' });
  }

  async getChecklistBoard<T = unknown>(parameters: Parameters.GetChecklistBoard, callback: Callback<T>): Promise<void>;
  async getChecklistBoard<T = unknown>(parameters: Parameters.GetChecklistBoard, callback?: never): Promise<T>;
  async getChecklistBoard<T = unknown>(parameters: Parameters.GetChecklistBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistBoard' });
  }

  async getChecklistCards<T = unknown>(parameters: Parameters.GetChecklistCards, callback: Callback<T>): Promise<void>;
  async getChecklistCards<T = unknown>(parameters: Parameters.GetChecklistCards, callback?: never): Promise<T>;
  async getChecklistCards<T = unknown>(parameters: Parameters.GetChecklistCards, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/cards`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistCards' });
  }

  async getChecklistCheckItems<T = unknown>(parameters: Parameters.GetChecklistCheckItems, callback: Callback<T>): Promise<void>;
  async getChecklistCheckItems<T = unknown>(parameters: Parameters.GetChecklistCheckItems, callback?: never): Promise<T>;
  async getChecklistCheckItems<T = unknown>(parameters: Parameters.GetChecklistCheckItems, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'GET',
      params: {
        filter: parameters.filter,
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistCheckItems' });
  }

  async createChecklistCheckItems<T = unknown>(parameters: Parameters.CreateChecklistCheckItems, callback: Callback<T>): Promise<void>;
  async createChecklistCheckItems<T = unknown>(parameters: Parameters.CreateChecklistCheckItems, callback?: never): Promise<T>;
  async createChecklistCheckItems<T = unknown>(parameters: Parameters.CreateChecklistCheckItems, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems`,
      method: 'POST',
      params: {
        name: parameters.name,
        pos: parameters.pos,
        checked: parameters.checked,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createChecklistCheckItems' });
  }

  async getChecklistCheckItem<T = unknown>(parameters: Parameters.GetChecklistCheckItem, callback: Callback<T>): Promise<void>;
  async getChecklistCheckItem<T = unknown>(parameters: Parameters.GetChecklistCheckItem, callback?: never): Promise<T>;
  async getChecklistCheckItem<T = unknown>(parameters: Parameters.GetChecklistCheckItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getChecklistCheckItem' });
  }

  /**
   * Remove an item from a checklist */
  async deleteChecklistCheckItem<T = unknown>(parameters: Parameters.DeleteChecklistCheckItem, callback: Callback<T>): Promise<void>;
  /**
   * Remove an item from a checklist */
  async deleteChecklistCheckItem<T = unknown>(parameters: Parameters.DeleteChecklistCheckItem, callback?: never): Promise<T>;
  async deleteChecklistCheckItem<T = unknown>(parameters: Parameters.DeleteChecklistCheckItem, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteChecklistCheckItem' });
  }
}
