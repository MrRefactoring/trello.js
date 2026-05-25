import { z } from 'zod';

export const GetMemberFieldSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of the member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: z.union([
    z.string(),
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
  ]),
});

export type GetMemberField = z.input<typeof GetMemberFieldSchema>;
