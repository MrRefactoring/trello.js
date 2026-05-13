import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const EmojiSchema = apiObject({
  trello: z
    .array(
      apiObject({
        unified: z.string().optional(),
        name: z.string().nullish(),
        native: z.string().optional(),
        shortName: z.string().optional(),
        shortNames: z.array(z.string()).optional(),
        text: z.string().nullish(),
        texts: z.array(z.string()).nullish(),
        category: z.string().optional(),
        sheetX: z.number().optional(),
        sheetY: z.number().optional(),
        tts: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        skinVariation: z.unknown().optional(),
        skinVariations: z.record(z.string(), z.any()).nullish(),
      }),
    )
    .optional(),
});

export type Emoji = z.infer<typeof EmojiSchema>;
