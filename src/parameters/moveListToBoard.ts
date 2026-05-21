import { z } from 'zod';

export const MoveListToBoardSchema = z.object({
  /** The ID of the list */
  id: z.string(),
  /** The ID of the board to move the list to */
  value: z.string(),
});

export type MoveListToBoard = z.input<typeof MoveListToBoardSchema>;
