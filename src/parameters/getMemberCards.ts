import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberCardsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` */
  filter: openEnum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible']).optional(),
});

export type GetMemberCards = z.input<typeof GetMemberCardsSchema>;
