import { z } from 'zod';

export const DeleteCardCheckItemSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the checkitem */
  idCheckItem: z.unknown(),
});

export type DeleteCardCheckItem = z.input<typeof DeleteCardCheckItemSchema>;
