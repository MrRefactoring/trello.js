import { Telemetry } from 'telemetry.trello.js';
import {
  Callback,
  RequestConfig,
} from '../types';

export interface Client {
  sendRequest<T>(requestConfig: RequestConfig, callback?: Callback<T> | undefined, telemetryData?: Partial<Telemetry>): Promise<T>;
  sendRequest<T>(requestConfig: RequestConfig, callback: Callback<T>, telemetryData?: Partial<Telemetry>): Promise<void>;
}
