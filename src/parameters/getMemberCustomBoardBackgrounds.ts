import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberCustomBoardBackgroundsSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type GetMemberCustomBoardBackgrounds = z.input<typeof GetMemberCustomBoardBackgroundsSchema>;
