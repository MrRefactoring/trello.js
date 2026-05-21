import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardEmailListSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** The id of an email list. */
  value: TrelloIDSchema,
});

export type UpdateBoardEmailList = z.input<typeof UpdateBoardEmailListSchema>;
