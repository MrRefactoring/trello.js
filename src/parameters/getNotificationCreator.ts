import { z } from 'zod';
import { MemberFieldsSchema } from '../models';

export const GetNotificationCreatorSchema = z.object({
  /** The ID of the notification */
  id: z.string(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: MemberFieldsSchema.optional(),
});

export type GetNotificationCreator = z.input<typeof GetNotificationCreatorSchema>;
