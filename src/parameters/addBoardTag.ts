import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const AddBoardTagSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** The id of a tag from the organization to which this board belongs. */
  value: TrelloIDSchema,
});

export type AddBoardTag = z.input<typeof AddBoardTagSchema>;
