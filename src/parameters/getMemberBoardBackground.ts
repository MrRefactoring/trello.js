import { z } from 'zod';

export const GetMemberBoardBackgroundSchema = z.object({
  /** `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` */
  fields: z.enum(['all', 'brightness', 'fullSizeUrl', 'scaled', 'tile']).optional(),
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the board background */
  idBackground: z.unknown(),
});

export type GetMemberBoardBackground = z.input<typeof GetMemberBoardBackgroundSchema>;
