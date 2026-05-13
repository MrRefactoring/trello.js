import { z } from 'zod';

export const GetBoardCardsByFilterSchema = z.object({
  /** ID of the Board */
  id: z.string(),
  /** One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` */
  filter: z.enum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible']),
});

export type GetBoardCardsByFilter = z.input<typeof GetBoardCardsByFilterSchema>;
