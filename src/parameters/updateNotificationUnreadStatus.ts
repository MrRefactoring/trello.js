import { z } from 'zod';

export const UpdateNotificationUnreadStatusSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  value: z.string().optional(),
});

export type UpdateNotificationUnreadStatus = z.input<typeof UpdateNotificationUnreadStatusSchema>;
