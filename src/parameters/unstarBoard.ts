import { z } from 'zod';

export const UnstarBoardSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the board star */
  idStar: z.string(),
});

export type UnstarBoard = z.input<typeof UnstarBoardSchema>;
