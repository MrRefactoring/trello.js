import { z } from 'zod';

export const GetMemberBoardStarsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
});

export type GetMemberBoardStars = z.input<typeof GetMemberBoardStarsSchema>;
