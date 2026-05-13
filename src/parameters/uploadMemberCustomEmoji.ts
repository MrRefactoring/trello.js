import { z } from 'zod';

export const UploadMemberCustomEmojiSchema = z.object({
  file: z.string(),
  /** Name for the emoji. 2 - 64 characters */
  name: z.string().max(64, 'name must be at most 64 characters'),
  /** The ID or username of the member */
  id: z.unknown(),
});

export type UploadMemberCustomEmoji = z.input<typeof UploadMemberCustomEmojiSchema>;
