import { z } from 'zod';

export const GetNotificationOrganizationSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
});

export type GetNotificationOrganization = z.input<typeof GetNotificationOrganizationSchema>;
