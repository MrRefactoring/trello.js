import { z } from 'zod';

export const GetBoardMembersSchema = z.object({
  /** The ID of the board */
  id: z.unknown(),
});

export type GetBoardMembers = z.input<typeof GetBoardMembersSchema>;
