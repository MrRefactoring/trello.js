import { describe, it, expect, vi } from 'vitest';
import * as plugins from '../../../src/api/plugins';
import type { Client } from '../../../src/core';

const PLUGIN = {
  id: 'p1',
  name: 'Test Plugin',
  url: 'https://example.com/plugin',
  iconUrl: 'https://example.com/icon.png',
  categories: ['utility'],
  author: 'tester',
};

const LISTING = {
  _id: 'l1',
  idPlugin: 'p1',
  name: 'Listing name',
  description: 'A listing',
  overview: 'Overview text',
  locale: 'en-US',
};

function makeClient(returnValue: unknown) {
  const sendRequest = vi.fn().mockResolvedValue(returnValue);
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

describe('plugins API (wire shape)', () => {
  it('getPlugin issues GET /plugins/{id}/', async () => {
    const { client, sendRequest } = makeClient(PLUGIN);
    await plugins.getPlugin(client, { id: 'p1' });
    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      url: '/plugins/p1/',
      method: 'GET',
    }));
  });

  it('updatePlugin issues PUT /plugins/{id}/', async () => {
    const { client, sendRequest } = makeClient(PLUGIN);
    await plugins.updatePlugin(client, { id: 'p1' });
    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      url: '/plugins/p1/',
      method: 'PUT',
    }));
  });

  it('createPluginListing posts the locale/description body', async () => {
    const { client, sendRequest } = makeClient(LISTING);
    await plugins.createPluginListing(client, {
      idPlugin: 'p1',
      locale: 'en-US',
      description: 'desc',
      overview: 'ov',
      name: 'name',
    });
    const opts = sendRequest.mock.calls[0][0] as { url: string; method: string; body: Record<string, string> };
    expect(opts.url).toBe('/plugins/p1/listing');
    expect(opts.method).toBe('POST');
    expect(opts.body).toEqual({
      description: 'desc',
      locale: 'en-US',
      overview: 'ov',
      name: 'name',
    });
  });

  it('getPluginMemberPrivacyCompliance hits /compliance/memberPrivacy', async () => {
    const { client, sendRequest } = makeClient(undefined);
    await plugins.getPluginMemberPrivacyCompliance(client, { id: 'p1' });
    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      url: '/plugins/p1/compliance/memberPrivacy',
      method: 'GET',
    }));
  });

  it('updatePluginListing puts to /listings/{idListing}', async () => {
    const { client, sendRequest } = makeClient(LISTING);
    await plugins.updatePluginListing(client, {
      idPlugin: 'p1',
      idListing: 'l1',
      locale: 'en-US',
      description: 'desc',
      overview: 'ov',
      name: 'name',
    });
    expect(sendRequest).toHaveBeenCalledWith(expect.objectContaining({
      url: '/plugins/p1/listings/l1',
      method: 'PUT',
    }));
  });
});
