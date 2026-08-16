import type { z } from 'zod';
import { openEnum } from '#/core';

export const BoardFieldsSchema = openEnum([
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
