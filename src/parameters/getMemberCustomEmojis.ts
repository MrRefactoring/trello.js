import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberCustomEmojisSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
});

export type GetMemberCustomEmojis = z.input<typeof GetMemberCustomEmojisSchema>;
