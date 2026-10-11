import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberCustomEmojiSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the custom emoji */
  idEmoji: z.string(),
  /** `all` or a comma-separated list of `name`, `url` */
  fields: z.union([openEnum(['name', 'url', 'all']), z.array(openEnum(['name', 'url', 'all']))]).optional(),
});

export type GetMemberCustomEmoji = z.input<typeof GetMemberCustomEmojiSchema>;
