import { z } from 'zod';

export const UpdateBoardShowSidebarMembersSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** Determines whether to show members of the board in the sidebar. */
  value: z.boolean(),
});

export type UpdateBoardShowSidebarMembers = z.input<typeof UpdateBoardShowSidebarMembersSchema>;
