import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetNotificationOrganizationSchema = z.object({
  /** The ID of the notification */
  id: TrelloIDSchema,
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([z.string(), z.array(z.string()), z.enum(['id', 'name']), z.array(z.enum(['id', 'name']))])
    .optional(),
});

export type GetNotificationOrganization = z.input<typeof GetNotificationOrganizationSchema>;
