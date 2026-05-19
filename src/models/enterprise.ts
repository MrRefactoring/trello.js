import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';
import { OrganizationPrefsSchema } from '#/models/organizationPrefs';

export const EnterpriseSchema = apiObject({
  id: TrelloIDSchema,
  name: z.string().optional(),
  displayName: z.string().optional(),
  logoHash: z.string().nullish(),
  logoUrl: z.string().nullish(),
  prefs: apiObject({
    ssoOnly: z.boolean().optional(),
    signup: apiObject({
      banner: z.string().optional(),
      bannerHtml: z.string().optional(),
    }).optional(),
    mandatoryTransferDate: z.coerce.date().nullish(),
    brandingColor: z.string().optional(),
    autoJoinOrganizations: z.boolean().optional(),
    notifications: z.record(z.string(), z.any()).optional(),
    maxMembers: z.number().nullish(),
  }).optional(),
  organizationPrefs: OrganizationPrefsSchema.optional(),
  ssoActivationFailed: z.boolean().optional(),
  idAdmins: z.array(TrelloIDSchema).optional(),
  enterpriseDomains: z.array(z.string()).optional(),
  isRealEnterprise: z.boolean().optional(),
  pluginWhitelistingEnabled: z.array(TrelloIDSchema).optional(),
  idOrganizations: z.array(TrelloIDSchema).optional(),
  products: z.array(z.number()).optional(),
  licenses: apiObject({
    maxMembers: z.number().nullish(),
    totalMembers: z.number().optional(),
    relatedEnterprises: z
      .array(
        apiObject({
          name: z.string().optional(),
          displayName: z.string().optional(),
          count: z.number().optional(),
        }),
      )
      .optional(),
  }).optional(),
  domains: z.array(z.string()).optional(),
  dateOrganizationPrefsLastUpdated: z.coerce.date().optional(),
  idp: apiObject({
    requestSigned: z.boolean().optional(),
    certificate: z.string().nullish(),
    loginUrl: z.string().nullish(),
  }).optional(),
});

export type Enterprise = z.infer<typeof EnterpriseSchema>;
