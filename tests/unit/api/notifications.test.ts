import { describe, it, expect, vi } from 'vitest';
import * as notifications from '../../../src/api/notifications';
import type { Client, SendRequestOptions } from '../../../src/core';

function captureClient(returnValue: unknown = undefined) {
  const sendRequest = vi.fn().mockResolvedValue(returnValue);
  return { client: { sendRequest } as unknown as Client, sendRequest };
}

const last = (m: ReturnType<typeof vi.fn>) =>
  m.mock.calls[m.mock.calls.length - 1][0] as SendRequestOptions<unknown> & { searchParams?: Record<string, unknown> };

describe('notifications API (wire shape)', () => {
  it('getNotification → GET /notifications/{id} with nested-resource searchParams', async () => {
    const { client, sendRequest } = captureClient({ id: 'n1' });
    await notifications.getNotification(client, {
      id: 'n1',
      board: true,
      boardFields: 'name',
      card: true,
      cardFields: 'name',
      display: true,
      entities: true,
      fields: 'data',
      list: true,
      member: true,
      memberFields: 'username',
      memberCreator: true,
      memberCreatorFields: 'username',
      organization: true,
      organizationFields: 'displayName',
    });
    const c = last(sendRequest);
    expect(c.url).toBe('/notifications/n1');
    expect(c.method).toBe('GET');
    expect(c.searchParams).toMatchObject({
      board_fields: 'name',
      card_fields: 'name',
      member_fields: 'username',
      memberCreator_fields: 'username',
      organization_fields: 'displayName',
    });
  });

  it('updateNotification → PUT /notifications/{id} with unread', async () => {
    const { client, sendRequest } = captureClient({ id: 'n1', unread: false });
    await notifications.updateNotification(client, { id: 'n1', unread: false });
    const c = last(sendRequest);
    expect(c.url).toBe('/notifications/n1');
    expect(c.method).toBe('PUT');
    expect(c.searchParams).toMatchObject({ unread: false });
  });

  it('getNotificationField<T> → GET /notifications/{id}/{field}', async () => {
    const { client, sendRequest } = captureClient({ _value: false });
    const result = await notifications.getNotificationField<boolean>(client, { id: 'n1', field: 'unread' });
    expect(last(sendRequest).url).toBe('/notifications/n1/unread');
    expect(result._value).toBe(false);
  });

  it('markAllNotificationsRead → POST /notifications/all/read with read query', async () => {
    const { client, sendRequest } = captureClient();
    await notifications.markAllNotificationsRead(client, { read: true });
    const c = last(sendRequest);
    expect(c.url).toBe('/notifications/all/read');
    expect(c.method).toBe('POST');
    expect(c.searchParams).toMatchObject({ read: true });
  });

  it('updateNotificationUnreadStatus → PUT /notifications/{id}/unread with value query', async () => {
    const { client, sendRequest } = captureClient({ id: 'n1', unread: true });
    await notifications.updateNotificationUnreadStatus(client, { id: 'n1', value: true });
    const c = last(sendRequest);
    expect(c.url).toBe('/notifications/n1/unread');
    expect(c.method).toBe('PUT');
    expect(c.searchParams).toMatchObject({ value: true });
  });

  it('getNotificationBoard → GET /notifications/{id}/board', async () => {
    const { client, sendRequest } = captureClient({ id: 'b1' });
    await notifications.getNotificationBoard(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/board');
  });

  it('getNotificationCard → GET /notifications/{id}/card', async () => {
    const { client, sendRequest } = captureClient({ id: 'c1' });
    await notifications.getNotificationCard(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/card');
  });

  it('getNotificationList → GET /notifications/{id}/list', async () => {
    const { client, sendRequest } = captureClient({ id: 'l1' });
    await notifications.getNotificationList(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/list');
  });

  it('getNotificationMember → GET /notifications/{id}/member', async () => {
    const { client, sendRequest } = captureClient({ id: 'm1' });
    await notifications.getNotificationMember(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/member');
  });

  it('getNotificationCreator → GET /notifications/{id}/memberCreator', async () => {
    const { client, sendRequest } = captureClient({ id: 'm1' });
    await notifications.getNotificationCreator(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/memberCreator');
  });

  it('getNotificationOrganization → GET /notifications/{id}/organization', async () => {
    const { client, sendRequest } = captureClient({ id: 'o1' });
    await notifications.getNotificationOrganization(client, { id: 'n1' });
    expect(last(sendRequest).url).toBe('/notifications/n1/organization');
  });
});
