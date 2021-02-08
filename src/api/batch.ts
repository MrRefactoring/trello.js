import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Batch {
  constructor(private client: Client) { }

  /**
   * Make up to 10 GET requests in a single, batched API call.
   */
  async getBatch<T = any>(parameters: Parameters.GetBatch, callback: Callback<T>): Promise<void>;
  /**
   * Make up to 10 GET requests in a single, batched API call.
   */
  async getBatch<T = any>(parameters: Parameters.GetBatch, callback?: undefined): Promise<T>;
  async getBatch<T = any>(parameters: Parameters.GetBatch, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/batch',
      method: 'GET',
      params: {
        urls: parameters.urls,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getBatch' });
  }
}
