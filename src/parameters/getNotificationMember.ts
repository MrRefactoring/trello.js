import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { MemberFieldsSchema } from '../models';

export const GetNotificationMemberSchema = z.object({
  /** The ID of the notification */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: MemberFieldsSchema.optional(),
});

export type GetNotificationMember = z.input<typeof GetNotificationMemberSchema>;
