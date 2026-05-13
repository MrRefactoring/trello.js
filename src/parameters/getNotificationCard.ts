import { z } from 'zod';

export const GetNotificationCardSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
});

export type GetNotificationCard = z.input<typeof GetNotificationCardSchema>;
