import { z } from 'zod';

export const UpdateBoardShowSidebarSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** Determines whether to show the side bar. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebar = z.input<typeof UpdateBoardShowSidebarSchema>;
