import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Webhooks {
  private prefix = 'webhooks';

  constructor(private readonly client: TrelloClient) { }

  public async getWebhook(
    options: { id: string },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getField(
    options: { id: string, field: string },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, options.field),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateWebhook(
    options: {
      id: string;
      description?: string;
      callbackURL?: string;
      idModel?: string;
      active?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        description: options.description,
        callbackURL: options.callbackURL,
        idModel: options.idModel,
        active: options.active
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addWebhook(
    options: {
      description?: string;
      callbackURL: string;
      idModel: string;
      active?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        description: options.description,
        callbackURL: options.callbackURL,
        idModel: options.idModel,
        active: options.active
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteWebhook(
    options: { id: string; },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
