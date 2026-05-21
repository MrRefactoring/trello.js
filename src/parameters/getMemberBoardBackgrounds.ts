import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberBoardBackgroundsSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  filter: z.enum(['all', 'custom', 'default', 'none', 'premium']).optional(),
});

export type GetMemberBoardBackgrounds = z.input<typeof GetMemberBoardBackgroundsSchema>;
