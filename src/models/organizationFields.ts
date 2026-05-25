import { z } from 'zod';

export const OrganizationFieldsSchema = z.enum([
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
