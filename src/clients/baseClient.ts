import { Client } from './client';
import { Config } from '../config';
import axios, { AxiosInstance } from 'axios';
import { Callback, RequestConfig } from '../types';

export class BaseClient implements Client {
  private instance: AxiosInstance;

  constructor(private config: Config) {
    this.instance = axios.create({
      paramsSerializer: this.paramSerializer.bind(this),
      ...config.baseRequestConfig,
      baseURL: 'https://api.trello.com/1',
    });
  }

  protected paramSerializer(parameters: Record<string, any>): string {
    const parts: string[] = [];

    Object.entries(parameters).forEach(([key, value]) => {
      if (value === null || typeof value === 'undefined') {
        return undefined;
      }

      if (Array.isArray(value)) {
        // eslint-disable-next-line no-param-reassign
        value = value.join(',');
      }

      if (value instanceof Date) {
        // eslint-disable-next-line no-param-reassign
        value = value.toISOString();
      } else if (value !== null && typeof value === 'object') {
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      }

      parts.push(`${this.encode(key)}=${this.encode(value)}`);

      return undefined;
    });

    return parts.join('&');
  }

  protected encode(value: string) {
    return encodeURIComponent(value)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }

  async sendRequest<T>(
    requestConfig: RequestConfig,
    callback?: Callback<T> | undefined,
    telemetryData?: any,
  ): Promise<T>;
  async sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: any): Promise<void>;
  async sendRequest<T>(rawRequestConfig: RequestConfig, callback?: Callback<T>): Promise<T | void> {
    const requestConfig: RequestConfig = {
      ...rawRequestConfig,
      params: {
        ...rawRequestConfig.params,
        key: this.config.key,
        token: this.config.token,
      },
    };

    try {
      const response = await this.instance.request<T>(requestConfig);

      const callbackResponseHandler = callback && ((data: T): void => callback(null, data));
      const defaultResponseHandler = (data: T): T => data;

      const responseHandler = callbackResponseHandler ?? defaultResponseHandler;

      this.config.middlewares?.onResponse?.(response.data);

      return responseHandler(response.data);
    } catch (e: any) {
      const callbackErrorHandler = callback && ((error: Config.Error) => callback(error));
      const defaultErrorHandler = (error: Error) => {
        throw error;
      };

      const errorHandler = callbackErrorHandler ?? defaultErrorHandler;

      this.config.middlewares?.onError?.(e);

      return errorHandler(e);
    }
  }
}
