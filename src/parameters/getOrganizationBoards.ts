import { z } from 'zod';
import { openEnum } from '#/core';

export const GetOrganizationBoardsSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
  /** `all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public` */
  filter: openEnum(['all', 'open', 'closed', 'members', 'organization', 'public']).optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      openEnum([
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
        openEnum([
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
});

export type GetOrganizationBoards = z.input<typeof GetOrganizationBoardsSchema>;
