import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const ReactionSummarySchema = apiObject({
  id: z.string(),
  idEmoji: z.string().optional(),
  count: z.number().optional(),
  emoji: apiObject({
    unified: z.string().optional(),
    native: z.string().optional(),
    name: z.string().optional(),
    shortName: z.string().optional(),
    skinVariation: z.string().nullish(),
  }).optional(),
  firstReacted: z.coerce.date().nullish(),
  idModel: z.string().nullish(),
  idReaction: z.string().nullish(),
});

export type ReactionSummary = z.infer<typeof ReactionSummarySchema>;
