import { z } from 'zod';

export const UpdateBoardShowSidebarActivitySchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** Determines whether to show sidebar activity. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarActivity = z.input<typeof UpdateBoardShowSidebarActivitySchema>;
