import { z } from 'zod';

export const createBoardSchema = z
  .object({
    /** The new name for the board. 1 to 16384 characters long. */
    name: z.string().min(1).max(16384),
  })
  .strict();

export type CreateBoard = z.infer<typeof createBoardSchema>;

