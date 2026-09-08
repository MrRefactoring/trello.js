import { z } from 'zod';
import { apiObject } from '#/core';
import { ActionDataListSchema } from '#/models/actionDataList';
import { ActionDataBoardSchema } from '#/models/actionDataBoard';
import { LimitsSchema } from '#/models/limits';
import { MemberSchema } from '#/models/member';

export const ActionCreateListSchema = apiObject({
  id: z.string(),
  idMemberCreator: z.string(),
  data: apiObject({
    list: ActionDataListSchema,
    board: ActionDataBoardSchema,
  }),
  type: z.enum(['createList']),
  date: z.coerce.date(),
  limits: LimitsSchema.nullish(),
  display: apiObject({
    translationKey: z.string().optional(),
    entities: apiObject({
      contextOn: apiObject({
        type: z.string().optional(),
        translationKey: z.string().optional(),
        hideIfContext: z.boolean().optional(),
        idContext: z.string().optional(),
      }).optional(),
      card: apiObject({
        type: z.string().optional(),
        hideIfContext: z.boolean().optional(),
        id: z.string(),
        shortLink: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
      comment: apiObject({
        type: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
      memberCreator: apiObject({
        type: z.string().optional(),
        id: z.string(),
        username: z.string().optional(),
        text: z.string().optional(),
      }).optional(),
    }).optional(),
  }).optional(),
  memberCreator: apiObject({
    id: z.string(),
    activityBlocked: z.boolean().optional(),
    avatarHash: z.string().optional(),
    avatarUrl: z.string().optional(),
    fullName: z.string().optional(),
    idMemberReferrer: z.string().nullish(),
    initials: z.string().optional(),
    username: z.string().optional(),
    nonPublic: z.record(z.string(), z.any()).optional(),
    nonPublicAvailable: z.boolean().optional(),
  }).optional(),
  /** Agentic identity associated with the action, present when it was performed by an agent rather than a human member. */
  agenticIdentity: z.unknown().optional(),
  appCreator: apiObject({
    id: z.string(),
    authType: z.string(),
  }).nullish(),
  entities: z
    .array(
      apiObject({
        type: z.string(),
        id: z.string().optional(),
        text: z.string().optional(),
        username: z.string().optional(),
        shortLink: z.string().optional(),
        hideIfContext: z.boolean().optional(),
        idContext: z.string().optional(),
        closed: z.boolean().optional(),
        due: z.coerce.date().optional(),
        dueComplete: z.boolean().optional(),
        date: z.coerce.date().optional(),
        link: z.boolean().optional(),
        url: z.string().optional(),
        originalUrl: z.string().optional(),
      }),
    )
    .optional(),
  member: MemberSchema.nullish(),
});

export type ActionCreateList = z.infer<typeof ActionCreateListSchema>;
