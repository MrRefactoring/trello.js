import { z } from 'zod';

export const GetMemberCardsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` */
  filter: z.enum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible']).optional(),
});

export type GetMemberCards = z.input<typeof GetMemberCardsSchema>;
