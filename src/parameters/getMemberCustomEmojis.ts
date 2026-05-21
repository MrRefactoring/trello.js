import { z } from 'zod';

export const GetMemberCustomEmojisSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
});

export type GetMemberCustomEmojis = z.input<typeof GetMemberCustomEmojisSchema>;
