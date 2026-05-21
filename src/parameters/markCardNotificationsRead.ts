import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const MarkCardNotificationsReadSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type MarkCardNotificationsRead = z.input<typeof MarkCardNotificationsReadSchema>;
