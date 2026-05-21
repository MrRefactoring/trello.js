import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const MarkBoardAsViewedSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
});

export type MarkBoardAsViewed = z.input<typeof MarkBoardAsViewedSchema>;
