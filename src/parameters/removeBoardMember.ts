import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveBoardMemberSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** The id of the member to add to the board. */
  idMember: TrelloIDSchema,
});

export type RemoveBoardMember = z.input<typeof RemoveBoardMemberSchema>;
