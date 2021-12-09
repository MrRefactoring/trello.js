import { AxiosError, AxiosRequestConfig } from 'axios';

export interface Config {
  key: string;
  token: string;
  baseRequestConfig?: Config.BaseRequestConfig;
  middlewares?: Config.Middlewares;
  /** @deprecated */
  telemetry?: Config.Telemetry;
}

export namespace Config {
  export type Error = AxiosError;
  export type BaseRequestConfig = AxiosRequestConfig;
  /** @deprecated */
  export type Telemetry = any;

  export interface Middlewares {
    onError?: Config.Middlewares.OnErrorHandler;
    onResponse?: Config.Middlewares.OnResponseHandler;
  }

  export namespace Middlewares {
    export type OnErrorHandler = (error: Config.Error) => void;
    export type OnResponseHandler<T = unknown> = (data: T) => void;
  }
}
