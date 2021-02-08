import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Tokens {
  constructor(private client: Client) { }

  /**
   * Retrieve information about a token. */
  async getTokensToken<T = Models.Token>(parameters: Parameters.GetTokensToken, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve information about a token. */
  async getTokensToken<T = Models.Token>(parameters: Parameters.GetTokensToken, callback?: undefined): Promise<T>;
  async getTokensToken<T = Models.Token>(parameters: Parameters.GetTokensToken, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}`,
      method: 'GET',
      params: {
        fields: parameters.fields,
        webhooks: parameters.webhooks,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokensToken' });
  }

  /**
   * Retrieve information about a token's owner by token. */
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve information about a token's owner by token. */
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback?: undefined): Promise<T>;
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/member`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenMember' });
  }

  /**
   * Retrieve all webhooks created with a Token. */
  async getTokensTokenWebhooks<T = any>(parameters: Parameters.GetTokensTokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve all webhooks created with a Token. */
  async getTokensTokenWebhooks<T = any>(parameters: Parameters.GetTokensTokenWebhooks, callback?: undefined): Promise<T>;
  async getTokensTokenWebhooks<T = any>(parameters: Parameters.GetTokensTokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenWebhooks' });
  }

  /**
   * Create a new webhook for a Token. */
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Create a new webhook for a Token. */
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback?: undefined): Promise<T>;
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'POST',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'postTokensTokenWebhooks' });
  }

  /**
   * Retrieve a webhook created with a Token. */
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(parameters: Parameters.GetTokensTokenWebhooksIdwebhook, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve a webhook created with a Token. */
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(parameters: Parameters.GetTokensTokenWebhooksIdwebhook, callback?: undefined): Promise<T>;
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(parameters: Parameters.GetTokensTokenWebhooksIdwebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenWebhooksIdwebhook' });
  }

  /**
   * Update a Webhook created by Token */
  async tokenWebhooks<T = any>(parameters: Parameters.TokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
   * Update a Webhook created by Token */
  async tokenWebhooks<T = any>(parameters: Parameters.TokenWebhooks, callback?: undefined): Promise<T>;
  async tokenWebhooks<T = any>(parameters: Parameters.TokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'PUT',
      params: {
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'tokenWebhooks' });
  }

  /**
   * Delete a webhook created with given token. */
  async deleteTokensTokenWebhooksIdwebhook<T = any>(parameters: Parameters.DeleteTokensTokenWebhooksIdwebhook, callback: Callback<T>): Promise<void>;
  /**
   * Delete a webhook created with given token. */
  async deleteTokensTokenWebhooksIdwebhook<T = any>(parameters: Parameters.DeleteTokensTokenWebhooksIdwebhook, callback?: undefined): Promise<T>;
  async deleteTokensTokenWebhooksIdwebhook<T = any>(parameters: Parameters.DeleteTokensTokenWebhooksIdwebhook, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteTokensTokenWebhooksIdwebhook' });
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
