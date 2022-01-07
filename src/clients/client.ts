import { Callback, RequestConfig } from '../types';

export interface Client {
  sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: any): Promise<T>;
  sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: any): Promise<void>;
}
