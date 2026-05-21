import { z } from 'zod';

export const MemberFieldsSchema = z.enum([
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
]);

export type MemberFields = z.infer<typeof MemberFieldsSchema>;
