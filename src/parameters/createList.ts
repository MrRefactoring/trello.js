import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateListSchema = z.object({
  /** Name for the list */
  name: z.string(),
  /** The long ID of the board the list should be created on */
  idBoard: TrelloIDSchema,
  /** ID of the List to copy into the new List */
  idListSource: TrelloIDSchema.optional(),
  /** Position of the list. `top`, `bottom`, or a positive floating point number */
  pos: z.union([z.number(), z.enum(['top', 'bottom'])]).optional(),
});

export type CreateList = z.input<typeof CreateListSchema>;
