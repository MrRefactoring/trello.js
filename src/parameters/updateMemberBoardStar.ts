import { z } from 'zod';

export const UpdateMemberBoardStarSchema = z.object({
  /** New position for the starred board. `top`, `bottom`, or a positive float. */
  pos: z.unknown().optional(),
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the board star */
  idStar: z.unknown(),
});

export type UpdateMemberBoardStar = z.input<typeof UpdateMemberBoardStarSchema>;
