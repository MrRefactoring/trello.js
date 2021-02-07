import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Labels {
  constructor(private client: Client) { }
  /**
     * Get information about a single Label. */
  async getLabelsId<T = any>(parameters: Parameters.GetLabelsId, callback: Callback<T>): Promise<void>;
  /**
     * Get information about a single Label. */
  async getLabelsId<T = any>(parameters: Parameters.GetLabelsId, callback?: undefined): Promise<T>;
  async getLabelsId<T = any>(parameters: Parameters.GetLabelsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/labels/${parameters.id}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getLabelsId' });
  }
  /**
     * Update a label by ID. */
  async putLabelsId<T = any>(parameters: Parameters.PutLabelsId, callback: Callback<T>): Promise<void>;
  /**
     * Update a label by ID. */
  async putLabelsId<T = any>(parameters: Parameters.PutLabelsId, callback?: undefined): Promise<T>;
  async putLabelsId<T = any>(parameters: Parameters.PutLabelsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/labels/${parameters.id}`,
      method: 'PUT',
      params: {
        name: parameters.name,
        color: parameters.color,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putLabelsId' });
  }
  /**
     * Delete a label by ID. */
  async deleteLabelsId<T = any>(parameters: Parameters.DeleteLabelsId, callback: Callback<T>): Promise<void>;
  /**
     * Delete a label by ID. */
  async deleteLabelsId<T = any>(parameters: Parameters.DeleteLabelsId, callback?: undefined): Promise<T>;
  async deleteLabelsId<T = any>(parameters: Parameters.DeleteLabelsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/labels/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteLabelsId' });
  }
  /**
     * Update a field on a label. */
  async putLabelsIdField<T = any>(parameters: Parameters.PutLabelsIdField, callback: Callback<T>): Promise<void>;
  /**
     * Update a field on a label. */
  async putLabelsIdField<T = any>(parameters: Parameters.PutLabelsIdField, callback?: undefined): Promise<T>;
  async putLabelsIdField<T = any>(parameters: Parameters.PutLabelsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/labels/${parameters.id}/${parameters.field}`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putLabelsIdField' });
  }
  /**
     * Create a new Label on a Board. */
  async postLabels<T = any>(parameters: Parameters.PostLabels, callback: Callback<T>): Promise<void>;
  /**
     * Create a new Label on a Board. */
  async postLabels<T = any>(parameters: Parameters.PostLabels, callback?: undefined): Promise<T>;
  async postLabels<T = any>(parameters: Parameters.PostLabels, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/labels',
      method: 'POST',
      params: {
        name: parameters.name,
        color: parameters.color,
        idBoard: parameters.idBoard,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postLabels' });
  }
}
