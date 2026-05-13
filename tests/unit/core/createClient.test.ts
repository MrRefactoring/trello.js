import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { z } from 'zod';
import { createClient } from '../../../src/core/createClient';

function mockFetch(status: number, body: unknown, contentType = 'application/json') {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return vi.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    statusText: String(status),
    headers: { get: (h: string) => (h === 'content-type' ? contentType : null) },
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(text),
  });
}

const BASE_CONFIG = { apiKey: 'key', apiToken: 'token' };

describe('createClient', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', mockFetch(200, { id: 'abc' }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  // ─── URL construction ────────────────────────────────────────────────────

  it('uses https://api.trello.com/1 as default host', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123' });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toMatch(/^https:\/\/api\.trello\.com\/1\/boards\/123/);
  });

  it('respects custom host', async () => {
    const client = createClient({ ...BASE_CONFIG, host: 'https://custom.host/2' });
    await client.sendRequest({ url: '/boards/123' });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toMatch(/^https:\/\/custom\.host\/2\/boards\/123/);
  });

  it('strips trailing slash from host', async () => {
    const client = createClient({ ...BASE_CONFIG, host: 'https://custom.host/1/' });
    await client.sendRequest({ url: '/boards/123' });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).not.toContain('//boards');
  });

  it('always injects apiKey and apiToken into the URL', async () => {
    const client = createClient({ apiKey: 'my-key', apiToken: 'my-token' });
    await client.sendRequest({ url: '/boards/123' });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toContain('key=my-key');
    expect(url).toContain('token=my-token');
  });

  it('forwards searchParams to the URL', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/cards', searchParams: { filter: 'open', limit: 10 } });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toContain('filter=open');
    expect(url).toContain('limit=10');
  });

  it('merges searchParams with apiKey and apiToken', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/cards', searchParams: { filter: 'open' } });
    const [url] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string];
    expect(url).toContain('filter=open');
    expect(url).toContain('key=key');
    expect(url).toContain('token=token');
  });

  // ─── HTTP method ─────────────────────────────────────────────────────────

  it('defaults to GET method', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.method).toBe('GET');
  });

  it('uses the specified method', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123', method: 'DELETE' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.method).toBe('DELETE');
  });

  // ─── Request body ─────────────────────────────────────────────────────────

  it('serializes object body to JSON string', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards', method: 'POST', body: { name: 'My Board' } });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.body).toBe(JSON.stringify({ name: 'My Board' }));
  });

  it('sends string body as-is', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards', method: 'POST', body: 'raw' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.body).toBe('raw');
  });

  it('sends undefined body when body is omitted', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.body).toBeUndefined();
  });

  it('sends undefined body when body is null', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123', body: null });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.body).toBeUndefined();
  });

  // ─── Headers ─────────────────────────────────────────────────────────────

  it('sets Content-Type: application/json for object body', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards', method: 'POST', body: { name: 'x' } });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string>)['Content-Type']).toBe('application/json');
  });

  it('does not set Content-Type for string body', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards', method: 'POST', body: 'raw' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string> | undefined)?.['Content-Type']).toBeUndefined();
  });

  it('does not set Content-Type when body is absent', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string> | undefined;
    expect(headers?.['Content-Type']).toBeUndefined();
  });

  it('sends headers: undefined when no headers exist', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect(init.headers).toBeUndefined();
  });

  it('includes default headers from config', async () => {
    const client = createClient({ ...BASE_CONFIG, headers: { 'X-App': 'trello.js' } });
    await client.sendRequest({ url: '/boards/123' });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string>)['X-App']).toBe('trello.js');
  });

  it('includes per-request headers', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards/123', headers: { 'X-Req': 'yes' } });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string>)['X-Req']).toBe('yes');
  });

  it('per-request headers override default headers', async () => {
    const client = createClient({ ...BASE_CONFIG, headers: { 'X-App': 'default' } });
    await client.sendRequest({ url: '/boards/123', headers: { 'X-App': 'override' } });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string>)['X-App']).toBe('override');
  });

  it('merges per-request headers with auto Content-Type', async () => {
    const client = createClient(BASE_CONFIG);
    await client.sendRequest({ url: '/boards', method: 'POST', body: { name: 'x' }, headers: { 'X-Req': 'yes' } });
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0] as [string, RequestInit];
    const headers = init.headers as Record<string, string>;
    expect(headers['Content-Type']).toBe('application/json');
    expect(headers['X-Req']).toBe('yes');
  });

  // ─── Response handling ────────────────────────────────────────────────────

  it('returns parsed JSON on success', async () => {
    const client = createClient(BASE_CONFIG);
    const result = await client.sendRequest({ url: '/boards/123' });
    expect(result).toEqual({ id: 'abc' });
  });

  it('validates response through zod schema when provided', async () => {
    const schema = z.object({ id: z.string() });
    const client = createClient(BASE_CONFIG);
    const result = await client.sendRequest({ url: '/boards/123', schema });
    expect(result).toEqual({ id: 'abc' });
  });

  it('throws ZodError when response does not match schema', async () => {
    vi.stubGlobal('fetch', mockFetch(200, { notId: 123 }));
    const schema = z.object({ id: z.string() });
    const client = createClient(BASE_CONFIG);
    await expect(client.sendRequest({ url: '/boards/123', schema })).rejects.toThrow();
  });

  it('returns undefined for 204 No Content', async () => {
    vi.stubGlobal('fetch', mockFetch(204, '', 'text/plain'));
    const client = createClient(BASE_CONFIG);
    const result = await client.sendRequest({ url: '/boards/123', method: 'DELETE' });
    expect(result).toBeUndefined();
  });

  it('returns undefined for non-JSON content-type', async () => {
    vi.stubGlobal('fetch', mockFetch(200, 'ok', 'text/plain'));
    const client = createClient(BASE_CONFIG);
    const result = await client.sendRequest({ url: '/boards/123' });
    expect(result).toBeUndefined();
  });

  it('throws on non-ok response', async () => {
    vi.stubGlobal('fetch', mockFetch(404, 'not found'));
    const client = createClient(BASE_CONFIG);
    await expect(client.sendRequest({ url: '/boards/bad' })).rejects.toThrow('Request failed: 404');
  });

  it('includes error body text in thrown error', async () => {
    vi.stubGlobal('fetch', mockFetch(400, 'invalid board id'));
    const client = createClient(BASE_CONFIG);
    await expect(client.sendRequest({ url: '/boards/bad' })).rejects.toThrow('invalid board id');
  });

  it('throws without extra text when error body is empty', async () => {
    vi.stubGlobal('fetch', mockFetch(500, ''));
    const client = createClient(BASE_CONFIG);
    await expect(client.sendRequest({ url: '/boards/bad' })).rejects.toThrow('Request failed: 500 500');
  });

  // ─── Retry logic ─────────────────────────────────────────────────────────

  it('retries on 429 and succeeds on next attempt', async () => {
    const rateLimited = {
      ok: false, status: 429, statusText: '429',
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
    };
    const success = {
      ok: true, status: 200, statusText: '200',
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({ id: 'retry-ok' }),
      text: () => Promise.resolve(''),
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce(rateLimited).mockResolvedValueOnce(success));
    vi.useFakeTimers();
    const client = createClient(BASE_CONFIG);
    const promise = client.sendRequest({ url: '/boards/123' });
    await vi.runAllTimersAsync();
    expect(await promise).toEqual({ id: 'retry-ok' });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('exhausts all 4 attempts on persistent 429 and throws', async () => {
    const rateLimited = {
      ok: false, status: 429, statusText: '429',
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({}),
      text: () => Promise.resolve('rate limited'),
    };
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(rateLimited));
    vi.useFakeTimers();
    const client = createClient(BASE_CONFIG);
    const promise = client.sendRequest({ url: '/boards/123' });
    // attach rejects handler before advancing timers to avoid unhandled rejection
    const assertion = expect(promise).rejects.toThrow('Request failed: 429');
    await vi.runAllTimersAsync();
    await assertion;
    expect(fetch).toHaveBeenCalledTimes(4);
  });

  it('applies exponential backoff between retries', async () => {
    const rateLimited = {
      ok: false, status: 429, statusText: '429',
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
    };
    const success = {
      ok: true, status: 200, statusText: '200',
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve({ id: 'ok' }),
      text: () => Promise.resolve(''),
    };
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce(rateLimited)
      .mockResolvedValueOnce(rateLimited)
      .mockResolvedValueOnce(success));
    vi.useFakeTimers();
    const client = createClient(BASE_CONFIG);
    const promise = client.sendRequest({ url: '/boards/123' });

    // attempt 0 → 429, waits 2000 * 2^0 = 2000ms
    await vi.advanceTimersByTimeAsync(1999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    // attempt 1 → 429, waits 2000 * 2^1 = 4000ms
    await vi.advanceTimersByTimeAsync(3999);
    expect(fetch).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1);
    // attempt 2 → 200 success
    expect(await promise).toEqual({ id: 'ok' });
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});
