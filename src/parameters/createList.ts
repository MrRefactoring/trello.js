import { z } from 'zod';
import { openEnum } from '#/core';

export const CreateListSchema = z.object({
  /** Name for the list */
  name: z.string(),
  /** The long ID of the board the list should be created on */
  idBoard: z.string(),
  /** ID of the List to copy into the new List */
  idListSource: z.string().optional(),
  /** Position of the list. `top`, `bottom`, or a positive floating point number */
  pos: z.union([z.number(), openEnum(['top', 'bottom'])]).optional(),
});

export type CreateList = z.input<typeof CreateListSchema>;
