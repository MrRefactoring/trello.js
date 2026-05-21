import { z } from 'zod';
import { apiObject } from '#/core';

export const CustomEmojiSchema = apiObject({
  id: z.string(),
  url: z.string().optional(),
  name: z.string().optional(),
});

export type CustomEmoji = z.infer<typeof CustomEmojiSchema>;
