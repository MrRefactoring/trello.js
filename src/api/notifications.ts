import { NotificationSchema, type Notification } from '#/models/notification';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { BoardSchema, type Board } from '#/models/board';
import { CardSchema, type Card } from '#/models/card';
import { TrelloListSchema, type TrelloList } from '#/models/trelloList';
import { MemberSchema, type Member } from '#/models/member';
import { OrganizationSchema, type Organization } from '#/models/organization';
import type { GetNotification } from '#/parameters/getNotification';
import type { UpdateNotification } from '#/parameters/updateNotification';
import type { GetNotificationField } from '#/parameters/getNotificationField';
import type { MarkAllNotificationsRead } from '#/parameters/markAllNotificationsRead';
import type { UpdateNotificationUnreadStatus } from '#/parameters/updateNotificationUnreadStatus';
import type { GetNotificationBoard } from '#/parameters/getNotificationBoard';
import type { GetNotificationCard } from '#/parameters/getNotificationCard';
import type { GetNotificationList } from '#/parameters/getNotificationList';
import type { GetNotificationMember } from '#/parameters/getNotificationMember';
import type { GetNotificationCreator } from '#/parameters/getNotificationCreator';
import type { GetNotificationOrganization } from '#/parameters/getNotificationOrganization';
import type { Client, SendRequestOptions } from '#/core';
import { z } from 'zod';

export async function getNotification(client: Client, parameters: GetNotification): Promise<Notification> {
  const config: SendRequestOptions<Notification> = {
    url: `/notifications/${parameters.id}`,
    method: 'GET',
    searchParams: {
      board: parameters.board,
      board_fields: parameters.boardFields,
      card: parameters.card,
      card_fields: parameters.cardFields,
      display: parameters.display,
      entities: parameters.entities,
      fields: parameters.fields,
      list: parameters.list,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
      organization: parameters.organization,
      organization_fields: parameters.organizationFields,
    },
    schema: NotificationSchema,
  };

  return await client.sendRequest(config);
}

/** Update the read status of a notification */
export async function updateNotification(client: Client, parameters: UpdateNotification): Promise<Notification> {
  const config: SendRequestOptions<Notification> = {
    url: `/notifications/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      unread: parameters.unread,
    },
    schema: NotificationSchema,
  };

  return await client.sendRequest(config);
}

/** Get a specific property of a notification */
export async function getNotificationField<T = unknown>(
  client: Client,
  parameters: GetNotificationField,
): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/notifications/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}

/** Mark all notifications as read */
export async function markAllNotificationsRead(client: Client, parameters: MarkAllNotificationsRead): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: '/notifications/all/read',
    method: 'POST',
    searchParams: {
      read: parameters.read,
      ids: parameters.ids,
    },
  };

  return await client.sendRequest(config);
}

/** Update Notification's read status */
export async function updateNotificationUnreadStatus(
  client: Client,
  parameters: UpdateNotificationUnreadStatus,
): Promise<Notification> {
  const config: SendRequestOptions<Notification> = {
    url: `/notifications/${parameters.id}/unread`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: NotificationSchema,
  };

  return await client.sendRequest(config);
}

/** Get the board a notification is associated with */
export async function getNotificationBoard(client: Client, parameters: GetNotificationBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/notifications/${parameters.id}/board`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** Get the card a notification is associated with */
export async function getNotificationCard(client: Client, parameters: GetNotificationCard): Promise<Card> {
  const config: SendRequestOptions<Card> = {
    url: `/notifications/${parameters.id}/card`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CardSchema,
  };

  return await client.sendRequest(config);
}

/** Get the list a notification is associated with */
export async function getNotificationList(client: Client, parameters: GetNotificationList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/notifications/${parameters.id}/list`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Get the member (not the creator) a notification is about */
export async function getNotificationMember(client: Client, parameters: GetNotificationMember): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/notifications/${parameters.id}/member`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Get the member who created the notification */
export async function getNotificationCreator(client: Client, parameters: GetNotificationCreator): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/notifications/${parameters.id}/memberCreator`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Get the organization a notification is associated with */
export async function getNotificationOrganization(
  client: Client,
  parameters: GetNotificationOrganization,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: `/notifications/${parameters.id}/organization`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: OrganizationSchema,
  };

  return await client.sendRequest(config);
}
