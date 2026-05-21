import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardShowSidebarSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** Determines whether to show the side bar. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebar = z.input<typeof UpdateBoardShowSidebarSchema>;
