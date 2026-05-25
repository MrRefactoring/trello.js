import { z } from 'zod';
import { apiObject } from '#/core';
import { OrganizationPrefsSchema } from '#/models/organizationPrefs';
import { MembershipsSchema } from '#/models/memberships';
import { LimitsSchema } from '#/models/limits';

export const OrganizationSchema = apiObject({
  id: z.string(),
  name: z.string().optional(),
  displayName: z.string().optional(),
  dateLastActivity: z.coerce.date().optional(),
  prefs: OrganizationPrefsSchema.optional(),
  idEnterprise: z.string().nullish(),
  offering: z.string().optional(),
  url: z.string().optional(),
  idBoards: z.array(z.string()).optional(),
  memberships: z.array(MembershipsSchema).optional(),
  premiumFeatures: z.array(z.string()).optional(),
  desc: z.string().optional(),
  descData: z.record(z.string(), z.any()).nullish(),
  logoHash: z.string().nullish(),
  logoUrl: z.string().nullish(),
  powerUps: z.array(z.unknown()).optional(),
  products: z.array(z.unknown()).optional(),
  teamType: z.string().nullish(),
  website: z.string().nullish(),
  activeMembershipCount: z.unknown().optional(),
  aiEligible: z.boolean().optional(),
  availableLicenseCount: z.unknown().optional(),
  billableCollaboratorCount: z.number().optional(),
  billableMemberCount: z.number().optional(),
  billingLocked: z.boolean().optional(),
  boardCounts: z.array(z.unknown()).optional(),
  creationMethod: z.unknown().optional(),
  credits: z.array(z.unknown()).optional(),
  domainName: z.unknown().optional(),
  enterpriseJoinRequest: z.record(z.string(), z.any()).nullish(),
  idActiveAdmins: z.unknown().optional(),
  idEntitlement: z.unknown().optional(),
  idMemberCreator: z.string().nullish(),
  invitations: z.array(z.unknown()).optional(),
  invited: z.boolean().optional(),
  ixUpdate: z.string().nullish(),
  jwmLink: z.unknown().optional(),
  limits: LimitsSchema.optional(),
  maximumLicenseCount: z.unknown().optional(),
  membersCount: z.number().optional(),
  nodeId: z.string().optional(),
  promotions: z.array(z.unknown()).optional(),
  standardVariation: z.unknown().optional(),
  type: z.unknown().optional(),
});

export type Organization = z.infer<typeof OrganizationSchema>;
