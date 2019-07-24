import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Labels {
  private readonly prefix = 'labels';

  constructor(private readonly client: TrelloClient) { }

  public async getLabel(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateLabel(
    options: {
      id: string;
      name?: string;
      color?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        name: options.name,
        color: options.color
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateColor(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'color'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateName(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'name'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addLabel(
    options: {
      idBoard: string;
      name: string;
      color: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        idBoard: options.idBoard,
        name: options.name,
        color: options.color
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteLabel(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
