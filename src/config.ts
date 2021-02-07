import { AxiosError, AxiosRequestConfig } from 'axios';

export interface Config {
  apiKey: string;
  apiToken: string;
  baseRequestConfig?: Config.BaseRequestConfig;
  middlewares?: Config.Middlewares;
}

export namespace Config {
  export type Error = AxiosError;
  export type BaseRequestConfig = AxiosRequestConfig;

  export interface Middlewares {
    onError?: Config.Middlewares.OnErrorHandler;
    onResponse?: Config.Middlewares.OnResponseHandler;
  }

  export namespace Middlewares {
    export type OnErrorHandler = (error: Config.Error) => void;
    export type OnResponseHandler<T = any> = (data: T) => void;
  }
}
