import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Webhooks {
  constructor(private client: Client) {
  }

  /**
   * Create a new webhook. */
  async createWebhook<T = Models.Webhook>(parameters: Parameters.CreateWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Create a new webhook. */
  async createWebhook<T = Models.Webhook>(parameters: Parameters.CreateWebhook, callback?: never): Promise<T>;
  async createWebhook<T = Models.Webhook>(parameters: Parameters.CreateWebhook, callback?: Callback<T>): Promise<void | T> {
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
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Get a webhook by ID. */
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhook, callback?: never): Promise<T>;
  async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getWebhook' });
  }

  /**
   * Update a webhook by ID. */
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.UpdateWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Update a webhook by ID. */
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.UpdateWebhook, callback?: never): Promise<T>;
  async updateWebhook<T = Models.Webhook>(parameters: Parameters.UpdateWebhook, callback?: Callback<T>): Promise<void | T> {
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
  async deleteWebhook<T = unknown>(parameters: Parameters.DeleteWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Delete a webhook by ID. */
  async deleteWebhook<T = unknown>(parameters: Parameters.DeleteWebhook, callback?: never): Promise<T>;
  async deleteWebhook<T = unknown>(parameters: Parameters.DeleteWebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteWebhook' });
  }

  /**
   * Get a field on a Webhook */
  async getWebhookField<T = unknown>(parameters: Parameters.GetWebhookField, callback: Callback<T>): Promise<void>;
  /**
   * Get a field on a Webhook */
  async getWebhookField<T = unknown>(parameters: Parameters.GetWebhookField, callback?: never): Promise<T>;
  async getWebhookField<T = unknown>(parameters: Parameters.GetWebhookField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/webhooks/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getWebhookField' });
  }
}
