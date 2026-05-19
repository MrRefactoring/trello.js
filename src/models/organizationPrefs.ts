import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const OrganizationPrefsSchema = apiObject({
  boardVisibilityRestrict: apiObject({
    private: z.string().optional(),
    org: z.string().optional(),
    enterprise: z.string().optional(),
    public: z.string().optional(),
  }).optional(),
  boardDeleteRestrict: apiObject({
    private: z.string().optional(),
    org: z.string().optional(),
    enterprise: z.string().optional(),
    public: z.string().optional(),
  }).optional(),
  attachmentRestrictions: z.array(z.enum(['computer', 'trello', 'google-drive', 'box', 'onedrive', 'link'])).nullish(),
  permissionLevel: z.enum(['org', 'private', 'public', 'enterprise', 'domain']).optional(),
  archiveCleanupCutOff: z.unknown().optional(),
  associatedDomain: z.unknown().optional(),
  atlassianIntelligenceEnabled: z.boolean().optional(),
  boardInviteRestrict: z.string().nullish(),
  externalMembersDisabled: z.boolean().optional(),
  googleAppsVersion: z.number().optional(),
  newLicenseInviteRestrict: z.unknown().optional(),
  newLicenseInviteRestrictUrl: z.unknown().optional(),
  orgInviteRestrict: z.array(z.unknown()).optional(),
});

export type OrganizationPrefs = z.infer<typeof OrganizationPrefsSchema>;
