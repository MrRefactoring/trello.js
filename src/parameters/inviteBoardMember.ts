import { z } from 'zod';

export const InviteBoardMemberSchema = z.object({
  /** The email address of a user to add as a member of the board. */
  email: z.string(),
  /**
   * Valid values: admin, normal, observer. Determines what type of member the user being added should be of the
   * board.
   */
  type: z.enum(['admin', 'normal', 'observer']).optional(),
  /** The ID of the board */
  id: z.unknown(),
  /**
   * The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end
   * with a space.
   */
  fullName: z.string().optional(),
});

export type InviteBoardMember = z.input<typeof InviteBoardMemberSchema>;
