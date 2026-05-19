import { buildUrl } from './buildUrl';
import type { Client, SendRequestOptions } from './types';

type CapturedRequest = {
  url: string;
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
};

export function createBatchRun<P>(
  realClient: Client,
  buildProxy: (recordingClient: Client) => P,
  executeBatch: (urls: string) => Promise<Array<Record<string, unknown>>>,
) {
  return async <T extends readonly Promise<unknown>[]>(
    callback: (b: P) => T,
  ): Promise<{ [K in keyof T]: Awaited<T[K]> }> => {
    const captured: CapturedRequest[] = [];

    const recordingClient: Client = {
      sendRequest: <R>(options: SendRequestOptions<R>): Promise<R> => {
        const relativeUrl = buildUrl(options.url, options.searchParams as Record<string, unknown> | undefined);

        return new Promise<R>((resolve, reject) => {
          captured.push({
            url: relativeUrl,
            resolve: resolve as (value: unknown) => void,
            reject,
          });
        });
      },
    };

    const proxy = buildProxy(recordingClient);
    const promises = callback(proxy);

    const urls = captured.map(r => r.url).join(',');
    const batchResults = await executeBatch(urls);

    for (let i = 0; i < captured.length; i++) {
      const result = batchResults[i];
      const [statusKey, data] = Object.entries(result)[0];
      const status = parseInt(statusKey, 10);

      if (status >= 200 && status < 300) {
        captured[i].resolve(data);
      } else {
        captured[i].reject(new Error(`Batch request failed: ${status} - ${JSON.stringify(data)}`));
      }
    }

    return Promise.all(promises) as Promise<{ [K in keyof T]: Awaited<T[K]> }>;
  };
}
