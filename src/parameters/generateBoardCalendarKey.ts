import { z } from 'zod';

export const GenerateBoardCalendarKeySchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
});

export type GenerateBoardCalendarKey = z.input<typeof GenerateBoardCalendarKeySchema>;
