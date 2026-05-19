import { z } from 'zod';

export const RemoveBoardMemberSchema = z.object({
  /** The id of the board to update */
  id: z.unknown(),
  /** The id of the member to add to the board. */
  idMember: z.unknown(),
});

export type RemoveBoardMember = z.input<typeof RemoveBoardMemberSchema>;
