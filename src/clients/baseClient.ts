import axios, { AxiosInstance } from 'axios';
import { Client } from './client';
import { Callback, RequestConfig } from '../types';
import { Config } from '../config';

export class BaseClient implements Client {
  private instance: AxiosInstance;

  constructor(private config: Config) {
    this.instance = axios.create({
      ...config.baseRequestConfig,
      baseURL: 'https://api.trello.com/1',
    });
  }

  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: Partial<any>): Promise<T>;
  async sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: Partial<any>): Promise<void>;
  async sendRequest<T>(rawRequestConfig: RequestConfig, callback?: Callback<T>, telemetryData?: Partial<any>): Promise<T | void> {
    const requestConfig: RequestConfig = {
      ...rawRequestConfig,
      params: {
        ...rawRequestConfig.params,
        key: this.config.apiKey,
        token: this.config.apiToken,
      },
    };

    try {
      const response = await this.instance.request(requestConfig);

      const callbackResponseHandler = callback && ((data: T): void => callback(null, data));
      const defaultResponseHandler = (data: T): T => data;

      const responseHandler = callbackResponseHandler ?? defaultResponseHandler;

      this.config.middlewares?.onResponse?.(response.data);

      return responseHandler(response.data);
    } catch (e) {
      const callbackErrorHandler = callback && ((error: Config.Error) => callback(error));
      const defaultErrorHandler = (error: Error) => {
        throw error;
      };

      const errorHandler = callbackErrorHandler ?? defaultErrorHandler;

      this.config.middlewares?.onError?.(e);

      return errorHandler(e);
    } finally {
      console.log(telemetryData);
    }
  }
}
