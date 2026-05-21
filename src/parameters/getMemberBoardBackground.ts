import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberBoardBackgroundSchema = z.object({
  /** `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` */
  fields: z.enum(['all', 'brightness', 'fullSizeUrl', 'scaled', 'tile']).optional(),
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the board background */
  idBackground: TrelloIDSchema,
});

export type GetMemberBoardBackground = z.input<typeof GetMemberBoardBackgroundSchema>;
