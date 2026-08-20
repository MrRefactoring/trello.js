import type { z } from 'zod';
import { openEnum } from '#/core';

export const OrganizationFieldsSchema = openEnum([
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
]);

export type OrganizationFields = z.infer<typeof OrganizationFieldsSchema>;
