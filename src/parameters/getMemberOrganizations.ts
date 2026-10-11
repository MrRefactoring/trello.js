import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberOrganizationsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces) */
  filter: openEnum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      openEnum([
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
        openEnum([
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
  /** Whether or not to include paid account information in the returned workspace object */
  paidAccount: z.boolean().optional(),
});

export type GetMemberOrganizations = z.input<typeof GetMemberOrganizationsSchema>;
