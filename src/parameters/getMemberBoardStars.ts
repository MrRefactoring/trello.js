import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberBoardStarsSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type GetMemberBoardStars = z.input<typeof GetMemberBoardStarsSchema>;
