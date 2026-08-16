import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberBoardBackgroundSchema = z.object({
  /** `all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile` */
  fields: openEnum(['all', 'brightness', 'fullSizeUrl', 'scaled', 'tile']).optional(),
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the board background */
  idBackground: z.string(),
});

export type GetMemberBoardBackground = z.input<typeof GetMemberBoardBackgroundSchema>;
