import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteMemberBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the board background */
  idBackground: TrelloIDSchema,
});

export type DeleteMemberBoardBackground = z.input<typeof DeleteMemberBoardBackgroundSchema>;
