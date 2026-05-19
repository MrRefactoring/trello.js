import { z } from 'zod';

export const UpdateBoardEmailListSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** The id of an email list. */
  value: z.unknown(),
});

export type UpdateBoardEmailList = z.input<typeof UpdateBoardEmailListSchema>;
