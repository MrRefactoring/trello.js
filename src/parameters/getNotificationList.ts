import { z } from 'zod';

export const GetNotificationListSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.unknown().optional(),
});

export type GetNotificationList = z.input<typeof GetNotificationListSchema>;
