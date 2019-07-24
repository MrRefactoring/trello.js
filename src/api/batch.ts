import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Batch {
  constructor(private readonly client: TrelloClient) { }

  public async batch(
    options: { urls: string },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl('batch'),
      method: 'GET',
      params: {
        urls: options.urls
      }
    };

    return this.client.sendRequest(opts, callback);
  }
}
