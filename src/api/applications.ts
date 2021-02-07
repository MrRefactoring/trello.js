import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Applications {
  constructor(private client: Client) { }
  async applicationsKeyCompliance<T = any>(parameters: Parameters.ApplicationsKeyCompliance, callback: Callback<T>): Promise<void>;
  async applicationsKeyCompliance<T = any>(parameters: Parameters.ApplicationsKeyCompliance, callback?: undefined): Promise<T>;
  async applicationsKeyCompliance<T = any>(parameters: Parameters.ApplicationsKeyCompliance, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/applications/${parameters.key}/compliance`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'applicationsKeyCompliance' });
  }
}
