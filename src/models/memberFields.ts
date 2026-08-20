import type { z } from 'zod';
import { openEnum } from '#/core';

export const MemberFieldsSchema = openEnum([
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
