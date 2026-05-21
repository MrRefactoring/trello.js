import { z } from 'zod';

export const UpdateBoardEmailListSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
  /** The id of an email list. */
  value: z.string(),
});

export type UpdateBoardEmailList = z.input<typeof UpdateBoardEmailListSchema>;
