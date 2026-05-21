import { z } from 'zod';

export const GetMemberBoardsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** `all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred` */
  filter: z.enum(['all', 'closed', 'members', 'open', 'organization', 'public', 'starred']).optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'name',
        'desc',
        'descData',
        'closed',
        'idMemberCreator',
        'idOrganization',
        'pinned',
        'url',
        'shortUrl',
        'prefs',
        'labelNames',
        'starred',
        'limits',
        'memberships',
        'enterpriseOwned',
      ]),
      z.array(
        z.enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ]),
      ),
    ])
    .optional(),
  /** Which lists to include with the boards. One of: `all`, `closed`, `none`, `open` */
  lists: z.enum(['all', 'closed', 'none', 'open']).optional(),
  /** Whether to include the Organization object with the Boards */
  organization: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields: z
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
});

export type GetMemberBoards = z.input<typeof GetMemberBoardsSchema>;
