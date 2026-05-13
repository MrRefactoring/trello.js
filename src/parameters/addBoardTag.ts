import { z } from 'zod';

export const AddBoardTagSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** The id of a tag from the organization to which this board belongs. */
  value: z.unknown(),
});

export type AddBoardTag = z.input<typeof AddBoardTagSchema>;
