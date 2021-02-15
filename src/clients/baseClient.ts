import axios, { AxiosInstance } from 'axios';
import { Telemetry, TelemetryClient } from 'telemetry.trello.js';
import { Client } from './client';
import { Callback, RequestConfig } from '../types';
import { Config } from '../config';

export class BaseClient implements Client {
  private instance: AxiosInstance;
  private telemetryClient: TelemetryClient;

  constructor(private config: Config) {
    this.telemetryClient = new TelemetryClient(config.telemetry);
    this.instance = axios.create({
      ...config.baseRequestConfig,
      baseURL: 'https://api.trello.com/1',
    });
  }

  async sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: Partial<Telemetry>): Promise<T>;
  async sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: Partial<Telemetry>): Promise<void>;
  async sendRequest<T>(rawRequestConfig: RequestConfig, callback?: Callback<T>, telemetryData?: Partial<Telemetry>): Promise<T | void> {
    const startDateTime = new Date();
    const requestConfig: RequestConfig = {
      ...rawRequestConfig,
      params: {
        ...rawRequestConfig.params,
        key: this.config.apiKey,
        token: this.config.apiToken,
      },
    };

    const telemetry: Telemetry = {
      authenticated: !!(this.config.apiKey && this.config.apiToken),
      bodyExists: !!requestConfig.data,
      callbackUsed: !!callback,
      libVersion: '1.0.0',
      libVersionHash: '226a631aedb85a43e7ad5714c4e623b5',
      methodName: telemetryData?.methodName || 'sendRequest',
      onErrorMiddlewareUser: !!this.config.middlewares?.onError,
      onResponseMiddlewareUsed: !!this.config.middlewares?.onResponse,
      queryExists: !!requestConfig.params,
      requestStartTime: startDateTime,
      requestEndTime: new Date(),
      requestStatusCode: 0,
      timeout: this.config.baseRequestConfig?.timeout || this.instance.defaults.timeout || -1,
      ...telemetryData,
    };

    try {
      const response = await this.instance.request(requestConfig);

      const callbackResponseHandler = callback && ((data: T): void => callback(null, data));
      const defaultResponseHandler = (data: T): T => data;

      const responseHandler = callbackResponseHandler ?? defaultResponseHandler;

      this.config.middlewares?.onResponse?.(response.data);

      telemetry.requestStatusCode = response.status;

      return responseHandler(response.data);
    } catch (e) {
      const callbackErrorHandler = callback && ((error: Config.Error) => callback(error));
      const defaultErrorHandler = (error: Error) => {
        throw error;
      };

      const errorHandler = callbackErrorHandler ?? defaultErrorHandler;

      this.config.middlewares?.onError?.(e);

      telemetry.requestStatusCode = e.status;

      return errorHandler(e);
    } finally {
      telemetry.requestEndTime = new Date();

      this.telemetryClient.sendTelemetry(telemetry);
    }
  }
}
