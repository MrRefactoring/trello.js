import { describe, it, expect, vi } from 'vitest';
import * as customFields from '../../../src/api/customFields';
import type { Client, SendRequestOptions } from '../../../src/core';

function captureClient(returnValue: unknown = undefined) {
  const sendRequest = vi.fn().mockResolvedValue(returnValue);
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

const last = (m: ReturnType<typeof vi.fn>) =>
  m.mock.calls[m.mock.calls.length - 1][0] as SendRequestOptions<unknown> & { body?: Record<string, unknown> };

const FIELD = { id: 'f1', idModel: 'b1', modelType: 'board', name: 'Field', type: 'text', pos: 1 };
const OPTION = { id: 'o1', idCustomField: 'f1', color: 'blue', value: { text: 'opt' }, pos: 1 };

describe('customFields API (wire shape)', () => {
  it('createCustomField → POST /customFields with full body', async () => {
    const { client, sendRequest } = captureClient(FIELD);
    await customFields.createCustomField(client, {
      idModel: 'b1',
      modelType: 'board',
      name: 'My Field',
      type: 'list',
      options: '[]',
      pos: 'top',
      display_cardFront: true,
    });
    const c = last(sendRequest);
    expect(c.url).toBe('/customFields');
    expect(c.method).toBe('POST');
    expect(c.body).toEqual({
      idModel: 'b1',
      modelType: 'board',
      name: 'My Field',
      type: 'list',
      options: '[]',
      pos: 'top',
      display_cardFront: true,
    });
  });

  it('getCustomField → GET /customFields/{id}', async () => {
    const { client, sendRequest } = captureClient(FIELD);
    await customFields.getCustomField(client, { id: 'f1' });
    expect(last(sendRequest)).toMatchObject({ url: '/customFields/f1', method: 'GET' });
  });

  it('updateCustomField → PUT /customFields/{id} with name/pos/display body', async () => {
    const { client, sendRequest } = captureClient(FIELD);
    await customFields.updateCustomField(client, {
      id: 'f1',
      name: 'Renamed',
      pos: 'bottom',
      'display/cardFront': false,
    });
    const c = last(sendRequest);
    expect(c.url).toBe('/customFields/f1');
    expect(c.method).toBe('PUT');
    expect(c.body).toEqual({
      name: 'Renamed',
      pos: 'bottom',
      'display/cardFront': false,
    });
  });

  it('deleteCustomField → DELETE /customFields/{id}', async () => {
    const { client, sendRequest } = captureClient();
    await customFields.deleteCustomField(client, { id: 'f1' });
    expect(last(sendRequest)).toMatchObject({ url: '/customFields/f1', method: 'DELETE' });
  });

  it('getCustomFieldOptions → GET /customFields/{id}/options', async () => {
    const { client, sendRequest } = captureClient([OPTION]);
    await customFields.getCustomFieldOptions(client, { id: 'f1' });
    expect(last(sendRequest).url).toBe('/customFields/f1/options');
  });

  it('createCustomFieldOption → POST /customFields/{id}/options with value/color/pos body', async () => {
    const { client, sendRequest } = captureClient(OPTION);
    await customFields.createCustomFieldOption(client, {
      id: 'f1',
      value: { text: 'opt' },
      color: 'blue',
      pos: 1,
    });
    const c = last(sendRequest);
    expect(c.url).toBe('/customFields/f1/options');
    expect(c.method).toBe('POST');
    expect(c.body).toEqual({ value: { text: 'opt' }, color: 'blue', pos: 1 });
  });

  it('getCustomFieldOption → GET /customFields/{id}/options/{idOption}', async () => {
    const { client, sendRequest } = captureClient(OPTION);
    await customFields.getCustomFieldOption(client, { id: 'f1', idCustomFieldOption: 'o1' });
    expect(last(sendRequest).url).toBe('/customFields/f1/options/o1');
  });

  it('deleteCustomFieldOption → DELETE /customFields/{id}/options/{idOption}', async () => {
    const { client, sendRequest } = captureClient();
    await customFields.deleteCustomFieldOption(client, { id: 'f1', idCustomFieldOption: 'o1' });
    expect(last(sendRequest)).toMatchObject({
      url: '/customFields/f1/options/o1',
      method: 'DELETE',
    });
  });
});
