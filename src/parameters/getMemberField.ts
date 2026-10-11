import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberFieldSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** One of the member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  field: openEnum([
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
});

export type GetMemberField = z.input<typeof GetMemberFieldSchema>;
