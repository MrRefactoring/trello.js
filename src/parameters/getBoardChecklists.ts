import { z } from 'zod';

export const GetBoardChecklistsSchema = z.object({
  /** The ID of the board */
  id: z.string(),
});

export type GetBoardChecklists = z.input<typeof GetBoardChecklistsSchema>;
