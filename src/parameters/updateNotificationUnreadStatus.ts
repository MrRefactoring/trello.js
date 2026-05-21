import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateNotificationUnreadStatusSchema = z.object({
  /** The ID of the notification */
  id: TrelloIDSchema,
  value: z.string().optional(),
});

export type UpdateNotificationUnreadStatus = z.input<typeof UpdateNotificationUnreadStatusSchema>;
