import { describe, it, expect, vi } from 'vitest';
import { run } from '../../../src/api/batch';
import type { Client, SendRequestOptions } from '../../../src/core';

function makeClient() {
  const sendRequest = vi.fn().mockResolvedValue('ok');
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

describe('batch.run (tree-shakable wrapper)', () => {
  it('issues a GET to /batch with the urls passed through searchParams', async () => {
    const { client, sendRequest } = makeClient();

    await run(client, { urls: '/boards/b1,/cards/c1' });

    expect(sendRequest).toHaveBeenCalledTimes(1);
    const [opts] = sendRequest.mock.calls[0] as [SendRequestOptions<unknown>];
    expect(opts.url).toBe('/batch');
    expect(opts.method).toBe('GET');
    expect(opts.searchParams).toEqual({ urls: '/boards/b1,/cards/c1' });
  });

  it('returns whatever the client resolves with', async () => {
    const { client, sendRequest } = makeClient();
    sendRequest.mockResolvedValueOnce([{ '200': { id: 'b1' } }]);

    await expect(run(client, { urls: '/boards/b1' })).resolves.toEqual([
      { '200': { id: 'b1' } },
    ]);
  });

  it('propagates rejections from the underlying client', async () => {
    const { client, sendRequest } = makeClient();
    sendRequest.mockRejectedValueOnce(new Error('network down'));

    await expect(run(client, { urls: '/boards/b1' })).rejects.toThrow('network down');
  });
});
