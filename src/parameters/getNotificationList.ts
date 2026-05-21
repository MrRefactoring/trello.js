import { z } from 'zod';
import { ListFieldsSchema } from '../models';

export const GetNotificationListSchema = z.object({
  /** The ID of the notification */
  id: z.string(),
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: ListFieldsSchema.optional(),
});

export type GetNotificationList = z.input<typeof GetNotificationListSchema>;
