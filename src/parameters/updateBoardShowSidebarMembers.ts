import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardShowSidebarMembersSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** Determines whether to show members of the board in the sidebar. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarMembers = z.input<typeof UpdateBoardShowSidebarMembersSchema>;
