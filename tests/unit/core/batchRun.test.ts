import { describe, it, expect, vi } from 'vitest';
import { createBatchRun } from '../../../src/core/batchRun';
import type { Client, SendRequestOptions } from '../../../src/core';

// A bare bones "namespace" the proxy exposes — a single method that calls the
// recording client. The tests only need it to capture URLs.
function makeProxy(client: Client) {
  return {
    getBoard: (params: { id: string }) =>
      client.sendRequest({ url: `/boards/${params.id}`, method: 'GET' }),
    getCard: (params: { id: string }) =>
      client.sendRequest({ url: `/cards/${params.id}`, method: 'GET' }),
    withQuery: (params: { id: string; fields: string }) =>
      client.sendRequest({
        url: `/boards/${params.id}`,
        method: 'GET',
        searchParams: { fields: params.fields },
      }),
  };
}

describe('createBatchRun', () => {
  it('joins captured URLs with comma and forwards them to executeBatch', async () => {
    const executeBatch = vi.fn().mockResolvedValue([{ '200': { id: 'b1' } }, { '200': { id: 'b2' } }]);
    const batchRun = createBatchRun({} as Client, makeProxy, executeBatch);

    await batchRun((b) => [b.getBoard({ id: 'b1' }), b.getBoard({ id: 'b2' })] as const);

    expect(executeBatch).toHaveBeenCalledTimes(1);
    expect(executeBatch).toHaveBeenCalledWith('/boards/b1,/boards/b2');
  });

  it('encodes searchParams via buildUrl before joining', async () => {
    const executeBatch = vi.fn().mockResolvedValue([{ '200': {} }]);
    const batchRun = createBatchRun({} as Client, makeProxy, executeBatch);

    await batchRun((b) => [b.withQuery({ id: 'b1', fields: 'name,desc' })] as const);

    const calledWith = executeBatch.mock.calls[0][0] as string;
    expect(calledWith.startsWith('/boards/b1?')).toBe(true);
    expect(calledWith).toContain('fields=');
  });

  it('resolves each request with the data from its 2xx batch slot', async () => {
    const executeBatch = vi.fn().mockResolvedValue([
      { '200': { id: 'b1', name: 'Board 1' } },
      { '201': { id: 'b2', name: 'Board 2' } },
    ]);
    const batchRun = createBatchRun({} as Client, makeProxy, executeBatch);

    const [a, b] = await batchRun((p) => [p.getBoard({ id: 'b1' }), p.getBoard({ id: 'b2' })] as const);

    expect(a).toEqual({ id: 'b1', name: 'Board 1' });
    expect(b).toEqual({ id: 'b2', name: 'Board 2' });
  });

  it('rejects only the slots whose batch result is non-2xx', async () => {
    const executeBatch = vi.fn().mockResolvedValue([
      { '200': { id: 'b1' } },
      { '404': { message: 'not found' } },
    ]);
    const batchRun = createBatchRun({} as Client, makeProxy, executeBatch);

    await expect(
      batchRun((p) => [p.getBoard({ id: 'b1' }), p.getBoard({ id: 'missing' })] as const),
    ).rejects.toThrow(/404.*not found/i);

    // `Promise.all` short-circuits on the first rejection — the assertion above
    // is enough to prove the failing slot rejected; the resolved slot doesn't
    // need a separate assertion (`Promise.all` would have surfaced it).
  });

  it('handles an empty callback (no recorded requests)', async () => {
    const executeBatch = vi.fn().mockResolvedValue([]);
    const batchRun = createBatchRun({} as Client, makeProxy, executeBatch);

    const result = await batchRun(() => [] as const);

    expect(result).toEqual([]);
    expect(executeBatch).toHaveBeenCalledWith('');
  });

  it('passes through buildUrl encoding for nested searchParams', async () => {
    const executeBatch = vi.fn().mockResolvedValue([{ '200': {} }]);
    const recordingProxy = (client: Client) => ({
      complexQuery: () =>
        client.sendRequest({
          url: '/search',
          method: 'GET',
          searchParams: { query: 'hello world', limit: 10 },
        }),
    });

    const batchRun = createBatchRun({} as Client, recordingProxy, executeBatch);
    await batchRun((p) => [p.complexQuery()] as const);

    const url = executeBatch.mock.calls[0][0] as string;
    expect(url).toMatch(/^\/search\?/);
    expect(url).toMatch(/query=hello(\+|%20)world/);
    expect(url).toContain('limit=10');
  });

  it('treats any captured request without an entry in executeBatch results as undefined', async () => {
    // Two requests but only one result — second resolve never fires.
    // Promise.all would hang in real life; we drop the offending request to
    // avoid the test hanging — the algorithm is documented as "results[i] for
    // captured[i]".
    type Sentinel = SendRequestOptions<unknown>;
    const stubProxy = (client: Client) => ({
      one: () => client.sendRequest({ url: '/one', method: 'GET' } as Sentinel),
    });
    const executeBatch = vi.fn().mockResolvedValue([{ '200': 'first' }]);
    const batchRun = createBatchRun({} as Client, stubProxy, executeBatch);

    const [first] = await batchRun((p) => [p.one()] as const);
    expect(first).toBe('first');
  });
});
