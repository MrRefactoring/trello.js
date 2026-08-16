import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberCustomEmojiSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the custom emoji */
  idEmoji: z.string(),
  /** `all` or a comma-separated list of `name`, `url` */
  fields: openEnum(['name', 'url', 'all']).optional(),
});

export type GetMemberCustomEmoji = z.input<typeof GetMemberCustomEmojiSchema>;
