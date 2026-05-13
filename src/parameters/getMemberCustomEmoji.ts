import { z } from 'zod';

export const GetMemberCustomEmojiSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the custom emoji */
  idEmoji: z.unknown(),
  /** `all` or a comma-separated list of `name`, `url` */
  fields: z.enum(['name', 'url', 'all']).optional(),
});

export type GetMemberCustomEmoji = z.input<typeof GetMemberCustomEmojiSchema>;
