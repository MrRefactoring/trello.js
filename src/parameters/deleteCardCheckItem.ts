import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCardCheckItemSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the checkitem */
  idCheckItem: TrelloIDSchema,
});

export type DeleteCardCheckItem = z.input<typeof DeleteCardCheckItemSchema>;
