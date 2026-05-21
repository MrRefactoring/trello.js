import { z } from 'zod';

export const GetMemberNotificationsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  entities: z.boolean().optional(),
  display: z.boolean().optional(),
  filter: z.string().optional(),
  /** One of: `all`, `read`, `unread` */
  readFilter: z.union([z.string(), z.enum(['all', 'read', 'unread'])]).optional(),
  /**
   * `all` or a comma-separated list of notification
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
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
      z.array(
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
      ),
    ])
    .optional(),
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
