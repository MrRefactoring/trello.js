import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberBoardStarSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the board star */
  idStar: TrelloIDSchema,
});

export type GetMemberBoardStar = z.input<typeof GetMemberBoardStarSchema>;
