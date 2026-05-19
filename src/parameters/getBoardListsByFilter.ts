import { z } from 'zod';

export const GetBoardListsByFilterSchema = z.object({
  /** The ID of the board */
  id: z.unknown(),
  /** One of `all`, `closed`, `none`, `open` */
  filter: z.unknown(),
});

export type GetBoardListsByFilter = z.input<typeof GetBoardListsByFilterSchema>;
