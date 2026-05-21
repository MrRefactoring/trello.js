import { z } from 'zod';

export const GenerateBoardCalendarKeySchema = z.object({
  /** The id of the board to update */
  id: z.string(),
});

export type GenerateBoardCalendarKey = z.input<typeof GenerateBoardCalendarKeySchema>;
