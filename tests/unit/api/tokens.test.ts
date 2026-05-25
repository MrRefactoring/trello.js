import { describe, it, expect, vi } from 'vitest';
import * as tokens from '../../../src/api/tokens';
import type { Client, SendRequestOptions } from '../../../src/core';

function captureClient() {
  const sendRequest = vi.fn().mockResolvedValue(undefined);
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

const last = (m: ReturnType<typeof vi.fn>) =>
  m.mock.calls[m.mock.calls.length - 1][0] as SendRequestOptions<unknown> & { searchParams?: Record<string, unknown> };

const TOKEN = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const WEBHOOK = 'w1';

describe('tokens API (wire shape)', () => {
  it('getToken issues GET /tokens/{token} with fields/webhooks search params', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: 't1' });
    await tokens.getToken(client, { token: TOKEN, fields: 'identifier', webhooks: true });
    const c = last(sendRequest);
    expect(c.url).toBe(`/tokens/${TOKEN}`);
    expect(c.method).toBe('GET');
    expect(c.searchParams).toMatchObject({ fields: 'identifier', webhooks: true });
  });

  it('getTokenMember issues GET /tokens/{token}/member', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: 'm1' });
    await tokens.getTokenMember(client, { token: TOKEN, fields: 'username' });
    const c = last(sendRequest);
    expect(c.url).toBe(`/tokens/${TOKEN}/member`);
    expect(c.searchParams).toMatchObject({ fields: 'username' });
  });

  it('getTokenWebhooks issues GET /tokens/{token}/webhooks', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce([]);
    await tokens.getTokenWebhooks(client, { token: TOKEN });
    expect(last(sendRequest).url).toBe(`/tokens/${TOKEN}/webhooks`);
  });

  it('createTokenWebhook posts description/callbackURL/idModel as query params', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: WEBHOOK });
    await tokens.createTokenWebhook(client, {
      token: TOKEN,
      description: 'webhook desc',
      callbackURL: 'https://example.com/cb',
      idModel: 'model-1',
    });
    const c = last(sendRequest);
    expect(c.url).toBe(`/tokens/${TOKEN}/webhooks`);
    expect(c.method).toBe('POST');
    expect(c.searchParams).toMatchObject({
      description: 'webhook desc',
      callbackURL: 'https://example.com/cb',
      idModel: 'model-1',
    });
  });

  it('getTokenWebhook issues GET /tokens/{token}/webhooks/{idWebhook}', async () => {
    const { client, sendRequest } = captureClient();
    sendRequest.mockResolvedValueOnce({ id: WEBHOOK });
    await tokens.getTokenWebhook(client, { token: TOKEN, idWebhook: WEBHOOK });
    expect(last(sendRequest).url).toBe(`/tokens/${TOKEN}/webhooks/${WEBHOOK}`);
  });

  it('updateTokenWebhook puts description/callbackURL/idModel as query params', async () => {
    const { client, sendRequest } = captureClient();
    await tokens.updateTokenWebhook(client, {
      token: TOKEN,
      idWebhook: WEBHOOK,
      description: 'new desc',
      callbackURL: 'https://example.com/new',
      idModel: 'model-2',
    });
    const c = last(sendRequest);
    expect(c.url).toBe(`/tokens/${TOKEN}/webhooks/${WEBHOOK}`);
    expect(c.method).toBe('PUT');
    expect(c.searchParams).toMatchObject({
      description: 'new desc',
      callbackURL: 'https://example.com/new',
      idModel: 'model-2',
    });
  });

  it('deleteTokenWebhook issues DELETE /tokens/{token}/webhooks/{idWebhook}', async () => {
    const { client, sendRequest } = captureClient();
    await tokens.deleteTokenWebhook(client, { token: TOKEN, idWebhook: WEBHOOK });
    expect(last(sendRequest)).toMatchObject({
      url: `/tokens/${TOKEN}/webhooks/${WEBHOOK}`,
      method: 'DELETE',
    });
  });

  it('deleteToken issues DELETE /tokens/{token}/', async () => {
    const { client, sendRequest } = captureClient();
    await tokens.deleteToken(client, { token: TOKEN });
    expect(last(sendRequest)).toMatchObject({
      url: `/tokens/${TOKEN}/`,
      method: 'DELETE',
    });
  });
});
