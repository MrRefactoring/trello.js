import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveCardMemberSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the member to remove from the card */
  idMember: TrelloIDSchema,
});

export type RemoveCardMember = z.input<typeof RemoveCardMemberSchema>;
