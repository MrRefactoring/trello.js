import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateMemberBoardStarSchema = z.object({
  /** New position for the starred board. `top`, `bottom`, or a positive float. */
  pos: z.union([z.number(), openEnum(['top', 'bottom'])]).optional(),
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the board star */
  idStar: z.string(),
});

export type UpdateMemberBoardStar = z.input<typeof UpdateMemberBoardStarSchema>;
