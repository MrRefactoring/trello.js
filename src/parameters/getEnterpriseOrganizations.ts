import { z } from 'zod';

export const GetEnterpriseOrganizationsSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: z.string(),
  /**
   * Comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'billableMemberCount',
        'desc',
        'descData',
        'displayName',
        'idBoards',
        'invitations',
        'invited',
        'logoHash',
        'memberships',
        'name',
        'powerUps',
        'prefs',
        'premiumFeatures',
        'products',
        'url',
        'website',
      ]),
      z.array(
        z.enum([
          'id',
          'billableMemberCount',
          'desc',
          'descData',
          'displayName',
          'idBoards',
          'invitations',
          'invited',
          'logoHash',
          'memberships',
          'name',
          'powerUps',
          'prefs',
          'premiumFeatures',
          'products',
          'url',
          'website',
        ]),
      ),
    ])
    .optional(),
  filter: z.string().optional(),
  /** Any integer greater than and equal to 1. */
  startIndex: z.number().optional(),
  /** Any integer between 0 and 100. */
  count: z.number().optional(),
});

export type GetEnterpriseOrganizations = z.input<typeof GetEnterpriseOrganizationsSchema>;
