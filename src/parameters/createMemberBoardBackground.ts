import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateMemberBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  file: z.string(),
});

export type CreateMemberBoardBackground = z.input<typeof CreateMemberBoardBackgroundSchema>;
