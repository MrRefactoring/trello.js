import type { SendRequestOptions } from './sendRequestOptions';

export interface Client {
  sendRequest<T>(options: SendRequestOptions<T>): Promise<T>;
}
