import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Tokens {
  constructor(private client: Client) { }

  /**
   * Retrieve information about a token. */
  async getToken<T = Models.Token>(parameters: Parameters.GetToken, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve information about a token. */
  async getToken<T = Models.Token>(parameters: Parameters.GetToken, callback?: undefined): Promise<T>;
  async getToken<T = Models.Token>(parameters: Parameters.GetToken, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        webhooks: parameters.webhooks,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getToken' });
  }

  /**
   * Retrieve information about a token's owner by token. */
  async getTokenMember<T = Models.Member>(parameters: Parameters.GetTokenMember, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve information about a token's owner by token. */
  async getTokenMember<T = Models.Member>(parameters: Parameters.GetTokenMember, callback?: undefined): Promise<T>;
  async getTokenMember<T = Models.Member>(parameters: Parameters.GetTokenMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/member`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokenMember' });
  }

  /**
   * Retrieve all webhooks created with a Token. */
  async getTokenWebhooks<T = any>(parameters: Parameters.GetTokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve all webhooks created with a Token. */
  async getTokenWebhooks<T = any>(parameters: Parameters.GetTokenWebhooks, callback?: undefined): Promise<T>;
  async getTokenWebhooks<T = any>(parameters: Parameters.GetTokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokenWebhooks' });
  }

  /**
   * Create a new webhook for a Token. */
  async createTokenWebhooks<T = Models.Webhook>(parameters: Parameters.CreateTokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Create a new webhook for a Token. */
  async createTokenWebhooks<T = Models.Webhook>(parameters: Parameters.CreateTokenWebhooks, callback?: undefined): Promise<T>;
  async createTokenWebhooks<T = Models.Webhook>(parameters: Parameters.CreateTokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'POST',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createTokenWebhooks' });
  }

  /**
   * Retrieve a webhook created with a Token. */
  async getTokenWebhook<T = Models.Webhook>(parameters: Parameters.GetTokenWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve a webhook created with a Token. */
  async getTokenWebhook<T = Models.Webhook>(parameters: Parameters.GetTokenWebhook, callback?: undefined): Promise<T>;
  async getTokenWebhook<T = Models.Webhook>(parameters: Parameters.GetTokenWebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokenWebhook' });
  }

  /**
   * Update a Webhook created by Token */
  async updateTokenWebhook<T = any>(parameters: Parameters.UpdateTokenWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Update a Webhook created by Token */
  async updateTokenWebhook<T = any>(parameters: Parameters.UpdateTokenWebhook, callback?: undefined): Promise<T>;
  async updateTokenWebhook<T = any>(parameters: Parameters.UpdateTokenWebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'PUT',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateTokenWebhook' });
  }

  /**
   * Delete a webhook created with given token. */
  async deleteTokenWebhook<T = any>(parameters: Parameters.DeleteTokenWebhook, callback: Callback<T>): Promise<void>;
  /**
   * Delete a webhook created with given token. */
  async deleteTokenWebhook<T = any>(parameters: Parameters.DeleteTokenWebhook, callback?: undefined): Promise<T>;
  async deleteTokenWebhook<T = any>(parameters: Parameters.DeleteTokenWebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteTokenWebhook' });
  }

  /**
   * Delete a token. */
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback: Callback<T>): Promise<void>;
  /**
   * Delete a token. */
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback?: undefined): Promise<T>;
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteToken' });
  }
}
