import { z } from 'zod';

export const GetBoardListsByFilterSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** One of `all`, `closed`, `none`, `open` */
  filter: z.union([z.string(), z.enum(['all', 'closed', 'none', 'open'])]),
});

export type GetBoardListsByFilter = z.input<typeof GetBoardListsByFilterSchema>;
