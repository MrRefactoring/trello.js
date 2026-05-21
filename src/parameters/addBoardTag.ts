import { z } from 'zod';

export const AddBoardTagSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
  /** The id of a tag from the organization to which this board belongs. */
  value: z.string(),
});

export type AddBoardTag = z.input<typeof AddBoardTagSchema>;
