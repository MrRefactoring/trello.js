import type { Run } from '#/parameters/run';
import type { Client, RequestOptions, SendRequestOptions } from '#/core';

/** Make up to 10 GET requests in a single, batched API call. */
export async function run(client: Client, parameters: Run, options?: RequestOptions): Promise<unknown> {
  const config: SendRequestOptions<unknown> = {
    url: '/batch',
    method: 'GET',
    searchParams: {
      urls: parameters.urls,
    },
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}
