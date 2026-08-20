import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardCardsByFilterSchema = z.object({
  /** ID of the Board */
  id: z.string(),
  /** One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible` */
  filter: openEnum(['all', 'closed', 'complete', 'incomplete', 'none', 'open', 'visible']),
});

export type GetBoardCardsByFilter = z.input<typeof GetBoardCardsByFilterSchema>;
