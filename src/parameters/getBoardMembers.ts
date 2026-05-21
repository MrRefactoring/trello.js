import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetBoardMembersSchema = z.object({
  /** The ID of the board */
  id: TrelloIDSchema,
});

export type GetBoardMembers = z.input<typeof GetBoardMembersSchema>;
