import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Webhooks {
  constructor(private client: Client) { }

  /**
   * Create a new webhook. */
  async createWebhook<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Create a new webhook. */
  async createWebhook<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback?: undefined): Promise<T>;
  async createWebhook<T = Models.Webhook>(parameters: Parameters.PostWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/webhooks/',
      method: 'POST',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
        active: parameters.active,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createWebhook' });
  }

  /**
   * Get a webhook by ID. */
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback: Callback<T>): Promise<void>;
  /**
   * Get a webhook by ID. */
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback?: undefined): Promise<T>;
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getWebhook' });
  }

  /**
   * Update a webhook by ID. */
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback: Callback<T>): Promise<void>;
  /**
   * Update a webhook by ID. */
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback?: undefined): Promise<T>;
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.PutWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}`,
      method: 'PUT',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
        active: parameters.active,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateWebhook' });
  }

  /**
   * Delete a webhook by ID. */
  async deleteWebhook<T = any>(parameters: Parameters.DeleteWebhooksId, callback: Callback<T>): Promise<void>;
  /**
   * Delete a webhook by ID. */
  async deleteWebhook<T = any>(parameters: Parameters.DeleteWebhooksId, callback?: undefined): Promise<T>;
  async deleteWebhook<T = any>(parameters: Parameters.DeleteWebhooksId, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteWebhook' });
  }

  /**
   * Get a field on a Webhook */
  async getWebhookField<T = any>(parameters: Parameters.Webhooksidfield, callback: Callback<T>): Promise<void>;
  /**
   * Get a field on a Webhook */
  async getWebhookField<T = any>(parameters: Parameters.Webhooksidfield, callback?: undefined): Promise<T>;
  async getWebhookField<T = any>(parameters: Parameters.Webhooksidfield, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getWebhookField' });
  }
}
