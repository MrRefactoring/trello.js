import { z } from 'zod';

export const CreateListSchema = z.object({
  /** Name for the list */
  name: z.string(),
  /** The long ID of the board the list should be created on */
  idBoard: z.string(),
  /** ID of the List to copy into the new List */
  idListSource: z.string().optional(),
  /** Position of the list. `top`, `bottom`, or a positive floating point number */
  pos: z.union([z.number(), z.enum(['top', 'bottom'])]).optional(),
});

export type CreateList = z.input<typeof CreateListSchema>;
