import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardShowSidebarBoardActionsSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** Determines whether to show the sidebar board actions. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarBoardActions = z.input<typeof UpdateBoardShowSidebarBoardActionsSchema>;
