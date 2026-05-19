import { z } from 'zod';

export const MarkCardNotificationsReadSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
});

export type MarkCardNotificationsRead = z.input<typeof MarkCardNotificationsReadSchema>;
