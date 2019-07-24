import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Tokens {
  private prefix = 'tokens';

  constructor(private readonly client: TrelloClient) { }

  public async getInfo(
    options: {
      token: string;
      fields?: string[];
      webhooks?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(','),
        webhooks: options.webhooks
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMember(
    options: {
      token: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'member'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getWebhooks(
    options: {
      token: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'webhooks'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getWebhook(
    options: {
      token: string;
      webhookId: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'webhooks', options.webhookId),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addWebhook(
    options: {
      token: string;
      description?: string;
      callbackURL: string;
      idModel: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'webhooks'),
      method: 'POST',
      params: {
        description: options.description,
        callbackURL: options.callbackURL,
        idModel: options.idModel
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateWebhook(
    options: {
      token: string;
      webhookId: string;
      description?: string;
      callbackURL: string;
      idModel: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'webhooks', options.webhookId),
      method: 'PUT',
      params: {
        description: options.description,
        callbackURL: options.callbackURL,
        idModel: options.idModel
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteToken(
    options: {
      token: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteWebhook(
    options: {
      token: string;
      webhookId: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.token, 'webhooks', options.webhookId),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
