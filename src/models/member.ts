import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { LimitsSchema } from '#/models/limits';
import { MemberPrefsSchema } from '#/models/memberPrefs';

export const MemberSchema = apiObject({
  id: TrelloIDSchema,
  activityBlocked: z.boolean().optional(),
  avatarHash: z.string().optional(),
  avatarUrl: z.string().optional(),
  bio: z.string().optional(),
  bioData: apiObject({
    emoji: z.record(z.string(), z.any()).optional(),
  }).nullish(),
  confirmed: z.boolean().optional(),
  fullName: z.string().optional(),
  idEnterprise: TrelloIDSchema.nullish(),
  idEnterprisesDeactivated: z.array(z.string()).optional(),
  idMemberReferrer: TrelloIDSchema.nullish(),
  idPremOrgsAdmin: z.array(TrelloIDSchema).optional(),
  initials: z.string().optional(),
  memberType: z.enum(['normal', 'ghost']).optional(),
  /**
   * Profile data with restricted visibility. These fields are visible only to members of the same organization. The
   * values here (full name, for example) may differ from the values at the top level of the response.
   */
  nonPublic: apiObject({
    fullName: z.string().optional(),
    initials: z.string().optional(),
    /** A URL that references the non-public avatar for the member */
    avatarUrl: z.string().optional(),
    avatarHash: z.string().optional(),
  }).optional(),
  /** Whether the response contains non-public profile data for the member */
  nonPublicAvailable: z.boolean().optional(),
  products: z.array(z.number()).optional(),
  url: z.string().optional(),
  username: z.string().optional(),
  status: z.enum(['disconnected']).optional(),
  aaEmail: z.string().nullish(),
  aaEnrolledDate: z.coerce.date().nullish(),
  aaId: z.string().nullish(),
  avatarSource: z.enum(['none', 'gravatar', 'upload']).optional(),
  email: z.string().optional(),
  gravatarHash: z.string().optional(),
  idBoards: z.array(TrelloIDSchema).optional(),
  idOrganizations: z.array(TrelloIDSchema).optional(),
  idEnterprisesAdmin: z.array(TrelloIDSchema).optional(),
  limits: LimitsSchema.optional(),
  loginTypes: z.array(z.string()).optional(),
  marketingOptIn: apiObject({
    optedIn: z.boolean().optional(),
    date: z.coerce.date().optional(),
  }).optional(),
  messagesDismissed: z
    .array(
      apiObject({
        name: z.string().optional(),
        count: z.number().optional(),
        lastDismissed: z.coerce.date().optional(),
        _id: TrelloIDSchema.optional(),
      }),
    )
    .optional(),
  oneTimeMessagesDismissed: z.array(z.string()).optional(),
  prefs: MemberPrefsSchema.optional(),
  trophies: z.array(z.string()).optional(),
  uploadedAvatarHash: z.string().nullish(),
  uploadedAvatarUrl: z.string().nullish(),
  premiumFeatures: z.array(z.string()).optional(),
  isAaMastered: z.boolean().optional(),
  ixUpdate: z.string().optional(),
  idBoardsPinned: z.array(TrelloIDSchema).nullish(),
  aaBlockSyncUntil: z.string().nullish(),
  credentialsRemovedCount: z.number().optional(),
  dateLastActive: z.coerce.date().optional(),
  dateLastImpression: z.coerce.date().optional(),
  domainClaimed: z.string().nullish(),
  nodeId: z.string().optional(),
  sessionType: z.string().nullish(),
  boards: z.array(z.unknown()).optional(),
  notifications: z.array(z.unknown()).optional(),
  organizations: z.array(z.unknown()).optional(),
  similarity: z.number().optional(),
  active: z.boolean().optional(),
  lastActive: z.unknown().optional(),
});

export type Member = z.infer<typeof MemberSchema>;
