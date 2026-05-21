import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveCardMemberVoteSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the member whose vote to remove */
  idMember: TrelloIDSchema,
});

export type RemoveCardMemberVote = z.input<typeof RemoveCardMemberVoteSchema>;
