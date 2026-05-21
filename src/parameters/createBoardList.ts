import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateBoardListSchema = z.object({
  /** The name of the list to be created. 1 to 16384 characters long. */
  name: z.string(),
  /** Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** The ID of the board */
  id: TrelloIDSchema,
});

export type CreateBoardList = z.input<typeof CreateBoardListSchema>;
