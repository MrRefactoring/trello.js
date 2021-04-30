import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Labels {
  constructor(private client: Client) {
  }

  /**
   * Get information about a single Label. */
  async getLabel<T = unknown>(parameters: Parameters.GetLabel, callback: Callback<T>): Promise<void>;
  /**
   * Get information about a single Label. */
  async getLabel<T = unknown>(parameters: Parameters.GetLabel, callback?: never): Promise<T>;
  async getLabel<T = unknown>(parameters: Parameters.GetLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/labels/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getLabel' });
  }

  /**
   * Update a label by ID. */
  async updateLabel<T = unknown>(parameters: Parameters.UpdateLabel, callback: Callback<T>): Promise<void>;
  /**
   * Update a label by ID. */
  async updateLabel<T = unknown>(parameters: Parameters.UpdateLabel, callback?: never): Promise<T>;
  async updateLabel<T = unknown>(parameters: Parameters.UpdateLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/labels/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        color: parameters.color,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateLabel' });
  }

  /**
   * Delete a label by ID. */
  async deleteLabel<T = unknown>(parameters: Parameters.DeleteLabel, callback: Callback<T>): Promise<void>;
  /**
   * Delete a label by ID. */
  async deleteLabel<T = unknown>(parameters: Parameters.DeleteLabel, callback?: never): Promise<T>;
  async deleteLabel<T = unknown>(parameters: Parameters.DeleteLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/labels/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteLabel' });
  }

  /**
   * Update a field on a label. */
  async updateLabelField<T = unknown>(parameters: Parameters.UpdateLabelField, callback: Callback<T>): Promise<void>;
  /**
   * Update a field on a label. */
  async updateLabelField<T = unknown>(parameters: Parameters.UpdateLabelField, callback?: never): Promise<T>;
  async updateLabelField<T = unknown>(parameters: Parameters.UpdateLabelField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/labels/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateLabelField' });
  }

  /**
   * Create a new Label on a Board. */
  async createLabel<T = unknown>(parameters: Parameters.CreateLabel, callback: Callback<T>): Promise<void>;
  /**
   * Create a new Label on a Board. */
  async createLabel<T = unknown>(parameters: Parameters.CreateLabel, callback?: never): Promise<T>;
  async createLabel<T = unknown>(parameters: Parameters.CreateLabel, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/labels',
      method: 'POST',
      params: {
        name: parameters.name,
        color: parameters.color,
        idBoard: parameters.idBoard,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createLabel' });
  }
}
