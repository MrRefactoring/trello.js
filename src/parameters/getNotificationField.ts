import { z } from 'zod';

export const GetNotificationFieldSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** A notification [field](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.unknown(),
});

export type GetNotificationField = z.input<typeof GetNotificationFieldSchema>;
