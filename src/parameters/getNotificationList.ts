import { z } from 'zod';

export const GetNotificationListSchema = z.object({
  /** The ID of the notification */
  id: z.string(),
  /**
   * `all` or a comma-separated list of list
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'name',
        'closed',
        'pos',
        'softLimit',
        'idBoard',
        'subscribed',
        'color',
        'datasource',
        'filter',
        'type',
        'creationMethod',
        'idOrganization',
      ]),
      z.array(
        z.enum([
          'id',
          'name',
          'closed',
          'pos',
          'softLimit',
          'idBoard',
          'subscribed',
          'color',
          'datasource',
          'filter',
          'type',
          'creationMethod',
          'idOrganization',
        ]),
      ),
    ])
    .optional(),
});

export type GetNotificationList = z.input<typeof GetNotificationListSchema>;
