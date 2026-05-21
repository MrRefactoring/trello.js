import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const AddCardMemberSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the Member to add to the card */
  value: TrelloIDSchema.optional(),
});

export type AddCardMember = z.input<typeof AddCardMemberSchema>;
