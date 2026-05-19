import { z } from 'zod';

export const RemoveCardMemberVoteSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the member whose vote to remove */
  idMember: z.unknown(),
});

export type RemoveCardMemberVote = z.input<typeof RemoveCardMemberVoteSchema>;
