import { AxiosError, AxiosRequestConfig } from 'axios';
import { TelemetryConfig } from 'telemetry.trello.js';

export interface Config {
  apiKey: string;
  apiToken: string;
  baseRequestConfig?: Config.BaseRequestConfig;
  middlewares?: Config.Middlewares;
  telemetry?: Config.Telemetry;
}

export namespace Config {
  export type Error = AxiosError;
  export type BaseRequestConfig = AxiosRequestConfig;
  export type Telemetry = boolean | TelemetryConfig;

  export interface Middlewares {
    onError?: Config.Middlewares.OnErrorHandler;
    onResponse?: Config.Middlewares.OnResponseHandler;
  }

  export namespace Middlewares {
    export type OnErrorHandler = (error: Config.Error) => void;
    export type OnResponseHandler<T = any> = (data: T) => void;
  }
}
