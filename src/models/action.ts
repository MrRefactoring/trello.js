import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';
import { LimitsSchema } from '#/models/limits';
import { MemberSchema } from '#/models/member';

export const ActionSchema = apiObject({
  id: TrelloIDSchema,
  idMemberCreator: TrelloIDSchema,
  data: z.record(z.string(), z.any()),
  type: z.string(),
  date: z.coerce.date(),
  limits: LimitsSchema.nullish(),
  display: apiObject({
    translationKey: z.string().optional(),
    entities: apiObject({
      contextOn: apiObject({
        type: z.string().optional(),
        translationKey: z.string().optional(),
        hideIfContext: z.boolean().optional(),
        idContext: TrelloIDSchema.optional(),
      }).optional(),
      card: apiObject({
        type: z.string().optional(),
        hideIfContext: z.boolean().optional(),
        id: TrelloIDSchema,
        shortLink: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
      comment: apiObject({
        type: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
      memberCreator: apiObject({
        type: z.string().optional(),
        id: TrelloIDSchema,
        username: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
    }).optional(),
  }).optional(),
  memberCreator: apiObject({
    id: TrelloIDSchema,
    activityBlocked: z.boolean().optional(),
    avatarHash: z.string().optional(),
    avatarUrl: z.string().optional(),
    fullName: z.string().optional(),
    idMemberReferrer: TrelloIDSchema.nullish(),
    initials: z.string().optional(),
    username: z.string().optional(),
    nonPublic: z.record(z.string(), z.any()).optional(),
    nonPublicAvailable: z.boolean().optional(),
  }).optional(),
  appCreator: z.record(z.string(), z.any()).nullish(),
  entities: z.array(z.unknown()).optional(),
  member: MemberSchema.nullish(),
});

export type Action = z.infer<typeof ActionSchema>;
