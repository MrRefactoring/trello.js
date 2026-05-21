import { z } from 'zod';

export const GetTokenMemberSchema = z.object({
  token: z.string(),
  /**
   * `all` or a comma-separated list of valid fields for [Member
   * Object](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/).
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'activityBlocked',
        'avatarHash',
        'avatarUrl',
        'bio',
        'bioData',
        'confirmed',
        'fullName',
        'idEnterprise',
        'idMemberReferrer',
        'idPremOrgsAdmin',
        'initials',
        'memberType',
        'nonPublic',
        'nonPublicAvailable',
        'products',
        'status',
        'url',
        'username',
        'idBoards',
        'idOrganizations',
      ]),
      z.array(
        z.enum([
          'id',
          'activityBlocked',
          'avatarHash',
          'avatarUrl',
          'bio',
          'bioData',
          'confirmed',
          'fullName',
          'idEnterprise',
          'idMemberReferrer',
          'idPremOrgsAdmin',
          'initials',
          'memberType',
          'nonPublic',
          'nonPublicAvailable',
          'products',
          'status',
          'url',
          'username',
          'idBoards',
          'idOrganizations',
        ]),
      ),
    ])
    .optional(),
});

export type GetTokenMember = z.input<typeof GetTokenMemberSchema>;
