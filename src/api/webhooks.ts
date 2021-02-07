import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Webhooks {
  constructor(private client: Client) { }
  /**
     * Create a new webhook. */
  async postWebhooks<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback: Callback<T>): Promise<void>;
  /**
     * Create a new webhook. */
  async postWebhooks<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback?: undefined): Promise<T>;
  async postWebhooks<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/webhooks/',
      method: 'POST',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
        active: parameters.active,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postWebhooks' });
  }
  /**
     * Get a webhook by ID. */
  async getWebhooksId<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback: Callback<T>): Promise<void>;
  /**
     * Get a webhook by ID. */
  async getWebhooksId<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback?: undefined): Promise<T>;
  async getWebhooksId<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/webhooks/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getWebhooksId' });
  }
  /**
     * Update a webhook by ID. */
  async putWebhooksId<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback: Callback<T>): Promise<void>;
  /**
     * Update a webhook by ID. */
  async putWebhooksId<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback?: undefined): Promise<T>;
  async putWebhooksId<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/webhooks/${parameters.id}`,
      method: 'PUT',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
        active: parameters.active,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putWebhooksId' });
  }
  /**
     * Delete a webhook by ID. */
  async deleteWebhooksId<T = any>(parameters: Parameters.DeleteWebhooksId, callback: Callback<T>): Promise<void>;
  /**
     * Delete a webhook by ID. */
  async deleteWebhooksId<T = any>(parameters: Parameters.DeleteWebhooksId, callback?: undefined): Promise<T>;
  async deleteWebhooksId<T = any>(parameters: Parameters.DeleteWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/webhooks/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteWebhooksId' });
  }
  /**
     * Get a field on a Webhook */
  async webhooksidfield<T = any>(parameters: Parameters.Webhooksidfield, callback: Callback<T>): Promise<void>;
  /**
     * Get a field on a Webhook */
  async webhooksidfield<T = any>(parameters: Parameters.Webhooksidfield, callback?: undefined): Promise<T>;
  async webhooksidfield<T = any>(parameters: Parameters.Webhooksidfield, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/webhooks/${parameters.id}/${parameters.field}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'webhooksidfield' });
  }
}
