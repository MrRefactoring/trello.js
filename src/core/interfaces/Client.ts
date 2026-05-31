import type { SendRequestOptions } from './SendRequestOptions';

export interface Client {
  sendRequest<T>(options: SendRequestOptions<T>): Promise<T>;
}
