import { z } from 'zod';

export const RemoveCardMemberSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the member to remove from the card */
  idMember: z.string(),
});

export type RemoveCardMember = z.input<typeof RemoveCardMemberSchema>;
