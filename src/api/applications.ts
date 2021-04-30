import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Applications {
  constructor(private client: Client) {
  }

  async applicationsKeyCompliance<T = unknown>(parameters: Parameters.ApplicationsKeyCompliance, callback: Callback<T>): Promise<void>;
  async applicationsKeyCompliance<T = unknown>(parameters: Parameters.ApplicationsKeyCompliance, callback?: never): Promise<T>;
  async applicationsKeyCompliance<T = unknown>(parameters: Parameters.ApplicationsKeyCompliance, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/applications/${parameters.key}/compliance`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'applicationsKeyCompliance' });
  }
}
