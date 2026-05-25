import { z } from 'zod';

export const StarBoardSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /** The ID of the board to star */
  idBoard: z.string(),
  /** The position of the newly starred board. `top`, `bottom`, or a positive float. */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]),
});

export type StarBoard = z.input<typeof StarBoardSchema>;
