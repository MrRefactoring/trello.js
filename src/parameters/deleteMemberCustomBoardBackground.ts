import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteMemberCustomBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: z.union([TrelloIDSchema, z.string()]),
  /** The ID of the custom background */
  idBackground: TrelloIDSchema,
});

export type DeleteMemberCustomBoardBackground = z.input<typeof DeleteMemberCustomBoardBackgroundSchema>;
