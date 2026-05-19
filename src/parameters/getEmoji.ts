import { z } from 'zod';

export const GetEmojiSchema = z.object({
  /** The locale to return emoji descriptions and names in. Defaults to the logged in member's locale. */
  locale: z.string().optional(),
  /** `true` to return spritesheet URLs in the response */
  spritesheets: z.boolean().optional(),
});

export type GetEmoji = z.input<typeof GetEmojiSchema>;
