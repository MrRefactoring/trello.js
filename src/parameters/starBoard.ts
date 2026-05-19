import { z } from 'zod';

export const StarBoardSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
  /** The ID of the board to star */
  idBoard: z.unknown(),
  /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
  pos: z.unknown(),
});

export type StarBoard = z.input<typeof StarBoardSchema>;
