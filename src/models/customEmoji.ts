import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';

export const CustomEmojiSchema = apiObject({
  id: TrelloIDSchema,
  url: z.string().optional(),
  name: z.string().optional(),
});

export type CustomEmoji = z.infer<typeof CustomEmojiSchema>;
