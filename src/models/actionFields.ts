import { z } from 'zod';

export const ActionFieldsSchema = z.enum([
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
