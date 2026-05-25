import { z } from 'zod';

export const MarkBoardAsViewedSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
});

export type MarkBoardAsViewed = z.input<typeof MarkBoardAsViewedSchema>;
