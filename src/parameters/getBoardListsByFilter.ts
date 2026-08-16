import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardListsByFilterSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** One of `all`, `closed`, `none`, `open` */
  filter: z.union([z.string(), openEnum(['all', 'closed', 'none', 'open'])]),
});

export type GetBoardListsByFilter = z.input<typeof GetBoardListsByFilterSchema>;
