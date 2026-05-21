import { z } from 'zod';

export const GetNotificationFieldSchema = z.object({
  /** The ID of the notification */
  id: z.string(),
  /** A notification [field](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.union([
    z.string(),
    z.enum([
      'id',
      'unread',
      'type',
      'date',
      'dateRead',
      'data',
      'card',
      'board',
      'idMemberCreator',
      'idAction',
      'reactions',
    ]),
  ]),
});

export type GetNotificationField = z.input<typeof GetNotificationFieldSchema>;
