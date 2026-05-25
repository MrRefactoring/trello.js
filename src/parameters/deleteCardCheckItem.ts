import { z } from 'zod';

export const DeleteCardCheckItemSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the checkitem */
  idCheckItem: z.string(),
});

export type DeleteCardCheckItem = z.input<typeof DeleteCardCheckItemSchema>;
