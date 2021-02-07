import { Client } from './client';
import { Callback, RequestConfig } from '../types';
import { Config } from '../config';

export class BaseClient implements Client {
  constructor(private config: Config) {}

  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: Partial<any>): Promise<T>;
  async sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: Partial<any>): Promise<void>;
  async sendRequest<T>(rawRequestConfig: RequestConfig, callback?: Callback<T>, telemetryData?: Partial<any>): Promise<T | void> {
    const requestConfig = {
      ...rawRequestConfig,
      key: this.config.apiKey,
      token: this.config.apiToken,
    };

    console.log(requestConfig, callback, telemetryData);

    return Promise.resolve();
  }
}
