import { z } from 'zod';

export const BoardFieldsSchema = z.enum([
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
]);

export type BoardFields = z.infer<typeof BoardFieldsSchema>;
