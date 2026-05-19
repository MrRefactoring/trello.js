import { z } from 'zod';

export const CreateBoardListSchema = z.object({
  /** The name of the list to be created. 1 to 16384 characters long. */
  name: z.string(),
  /** Determines the position of the list. Valid values: `top`, `bottom`, or a positive number. */
  pos: z.string().optional(),
  /** The ID of the board */
  id: z.unknown(),
});

export type CreateBoardList = z.input<typeof CreateBoardListSchema>;
