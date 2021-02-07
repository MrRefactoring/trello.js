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
    const config = ({
      url: `/tokens/${parameters.token}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
        webhooks: parameters.webhooks,
      },
      data: parameters.body,
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getTokensToken' });
  }
  /**
     * Retrieve information about a token's owner by token. */
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback: Callback<T>): Promise<void>;
  /**
     * Retrieve information about a token's owner by token. */
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback?: undefined): Promise<T>;
  async getTokensTokenMember<T = Models.Member>(parameters: Parameters.GetTokensTokenMember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/member`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
      data: parameters.body,
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenMember' });
  }
  /**
     * Retrieve all webhooks created with a Token. */
  async getTokensTokenWebhooks<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Retrieve all webhooks created with a Token. */
  async getTokensTokenWebhooks<T = any>(callback?: undefined): Promise<T>;
  async getTokensTokenWebhooks<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenWebhooks' });
  }
  /**
     * Create a new webhook for a Token. */
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback: Callback<T>): Promise<void>;
  /**
     * Create a new webhook for a Token. */
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback?: undefined): Promise<T>;
  async postTokensTokenWebhooks<T = Models.Webhook>(parameters: Parameters.PostTokensTokenWebhooks, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/webhooks`,
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postTokensTokenWebhooks' });
  }
  /**
     * Retrieve a webhook created with a Token. */
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(callback?: Callback<T>): Promise<void>;
  /**
     * Retrieve a webhook created with a Token. */
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(callback?: undefined): Promise<T>;
  async getTokensTokenWebhooksIdwebhook<T = Models.Webhook>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getTokensTokenWebhooksIdwebhook' });
  }
  /**
     * Update a Webhook created by Token */
  async tokenstokenwebhooks1<T = any>(parameters: Parameters.Tokenstokenwebhooks1, callback: Callback<T>): Promise<void>;
  /**
     * Update a Webhook created by Token */
  async tokenstokenwebhooks1<T = any>(parameters: Parameters.Tokenstokenwebhooks1, callback?: undefined): Promise<T>;
  async tokenstokenwebhooks1<T = any>(parameters: Parameters.Tokenstokenwebhooks1, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        description: parameters.description,
        callbackURL: parameters.callbackURL,
        idModel: parameters.idModel,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'tokenstokenwebhooks1' });
  }
  /**
     * Delete a webhook created with given token. */
  async deleteTokensTokenWebhooksIdwebhook<T = any>(callback?: Callback<T>): Promise<void>;
  /**
     * Delete a webhook created with given token. */
  async deleteTokensTokenWebhooksIdwebhook<T = any>(callback?: undefined): Promise<T>;
  async deleteTokensTokenWebhooksIdwebhook<T = any>(callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteTokensTokenWebhooksIdwebhook' });
  }
  /**
     * Delete a token. */
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback: Callback<T>): Promise<void>;
  /**
     * Delete a token. */
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback?: undefined): Promise<T>;
  async deleteToken<T = any>(parameters: Parameters.DeleteToken, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/tokens/${parameters.token}/`,
      method: 'DELETE',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
      data: parameters.body,
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteToken' });
  }
}
