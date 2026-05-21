import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetBoardListsByFilterSchema = z.object({
  /** The ID of the board */
  id: TrelloIDSchema,
  /** One of `all`, `closed`, `none`, `open` */
  filter: z.union([z.string(), z.enum(['all', 'closed', 'none', 'open'])]),
});

export type GetBoardListsByFilter = z.input<typeof GetBoardListsByFilterSchema>;
