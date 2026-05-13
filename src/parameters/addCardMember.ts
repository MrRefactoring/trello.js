import { z } from 'zod';

export const AddCardMemberSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the Member to add to the card */
  value: z.unknown().optional(),
});

export type AddCardMember = z.input<typeof AddCardMemberSchema>;
