import { z } from 'zod';

export const GetMemberNotificationsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  entities: z.boolean().optional(),
  display: z.boolean().optional(),
  filter: z.string().optional(),
  /** One of: `all`, `read`, `unread` */
  readFilter: z.string().optional(),
  /**
   * `all` or a comma-separated list of notification
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Max 1000 */
  limit: z.number().optional(),
  /** Max 100 */
  page: z.number().optional(),
  /** A notification ID */
  before: z.string().optional(),
  /** A notification ID */
  since: z.string().optional(),
  memberCreator: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetMemberNotifications = z.input<typeof GetMemberNotificationsSchema>;
