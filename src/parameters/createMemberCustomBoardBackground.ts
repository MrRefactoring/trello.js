import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateMemberCustomBoardBackgroundSchema = z.object({
  file: z.string(),
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type CreateMemberCustomBoardBackground = z.input<typeof CreateMemberCustomBoardBackgroundSchema>;
