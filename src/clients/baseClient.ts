import { Client } from './client';
import { Callback, RequestConfig } from '../types';
import { Config } from '../config';

export class BaseClient implements Client {
  constructor(private config: Config) {}

  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: Partial<any>): Promise<T>;
  async sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: Partial<any>): Promise<void>;
  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T>, telemetryData?: Partial<any>): Promise<T | void> {
    console.log(requestConfig, callback, telemetryData);

    return Promise.resolve();
  }
}
