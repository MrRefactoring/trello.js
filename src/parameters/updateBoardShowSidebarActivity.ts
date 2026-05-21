import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardShowSidebarActivitySchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** Determines whether to show sidebar activity. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarActivity = z.input<typeof UpdateBoardShowSidebarActivitySchema>;
