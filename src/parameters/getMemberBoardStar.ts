import { z } from 'zod';

export const GetMemberBoardStarSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the board star */
  idStar: z.unknown(),
});

export type GetMemberBoardStar = z.input<typeof GetMemberBoardStarSchema>;
