import { z } from 'zod';

export const UpdateNotificationSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** Whether the notification should be marked as read or not */
  unread: z.boolean().optional(),
});

export type UpdateNotification = z.input<typeof UpdateNotificationSchema>;
