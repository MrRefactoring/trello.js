import { z } from 'zod';

export const GetOrganizationFieldSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** An organization [field](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.union([
    z.string(),
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
  ]),
});

export type GetOrganizationField = z.input<typeof GetOrganizationFieldSchema>;
