import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardMemberSchema = z.object({
  /** One of: admin, normal, observer. Determines the type of member this user will be on the board. */
  type: z.enum(['admin', 'normal', 'observer']),
  /** Optional param that allows organization admins to add multi-board guests onto a board. */
  allowBillableGuest: z.boolean().optional(),
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** The id of the member to add to the board. */
  idMember: TrelloIDSchema,
});

export type UpdateBoardMember = z.input<typeof UpdateBoardMemberSchema>;
