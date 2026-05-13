import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { MemberSchema } from '#/models/member';

export const ReactionSchema = apiObject({
  id: z.string(),
  idMember: z.string().optional(),
  idModel: z.string().optional(),
  idEmoji: z.string().optional(),
  emoji: apiObject({
    unified: z.string().optional(),
    native: z.string().optional(),
    name: z.string().optional(),
    shortName: z.string().optional(),
    skinVariation: z.string().nullish(),
  }).optional(),
  member: MemberSchema.nullish(),
});

export type Reaction = z.infer<typeof ReactionSchema>;
