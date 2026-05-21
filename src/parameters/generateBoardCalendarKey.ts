import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GenerateBoardCalendarKeySchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
});

export type GenerateBoardCalendarKey = z.input<typeof GenerateBoardCalendarKeySchema>;
