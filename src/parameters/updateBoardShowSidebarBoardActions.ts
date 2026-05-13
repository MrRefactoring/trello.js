import { z } from 'zod';

export const UpdateBoardShowSidebarBoardActionsSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** Determines whether to show the sidebar board actions. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarBoardActions = z.input<typeof UpdateBoardShowSidebarBoardActionsSchema>;
