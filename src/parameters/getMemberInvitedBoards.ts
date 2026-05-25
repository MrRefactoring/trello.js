import { z } from 'zod';

export const GetMemberInvitedBoardsSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
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
});

export type GetMemberInvitedBoards = z.input<typeof GetMemberInvitedBoardsSchema>;
