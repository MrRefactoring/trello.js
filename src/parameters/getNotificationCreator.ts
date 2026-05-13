import { z } from 'zod';

export const GetNotificationCreatorSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
});

export type GetNotificationCreator = z.input<typeof GetNotificationCreatorSchema>;
