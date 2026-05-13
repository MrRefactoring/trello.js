import { z } from 'zod';

export const RemoveCardMemberSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the member to remove from the card */
  idMember: z.unknown(),
});

export type RemoveCardMember = z.input<typeof RemoveCardMemberSchema>;
