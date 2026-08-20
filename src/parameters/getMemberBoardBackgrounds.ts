import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberBoardBackgroundsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  filter: openEnum(['all', 'custom', 'default', 'none', 'premium']).optional(),
});

export type GetMemberBoardBackgrounds = z.input<typeof GetMemberBoardBackgroundsSchema>;
