import type { z } from 'zod';
import { openEnum } from '#/core';

export const ActionFieldsSchema = openEnum([
  'id',
  'idMemberCreator',
  'data',
  'type',
  'date',
  'limits',
  'display',
  'memberCreator',
]);

export type ActionFields = z.infer<typeof ActionFieldsSchema>;
