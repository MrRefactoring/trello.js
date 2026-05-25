import { z } from 'zod';

export const AddCardMemberSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the Member to add to the card */
  value: z.string().optional(),
});

export type AddCardMember = z.input<typeof AddCardMemberSchema>;
