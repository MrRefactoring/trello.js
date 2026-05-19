import { z } from 'zod';

export const DeleteBoardSchema = z.object({
  /** The id of the board to delete */
  id: z.string(),
});

export type DeleteBoard = z.input<typeof DeleteBoardSchema>;
