import { z } from 'zod';

export const ListFieldsSchema = z.enum([
  'id',
  'name',
  'closed',
  'pos',
  'softLimit',
  'idBoard',
  'subscribed',
  'color',
  'datasource',
  'filter',
  'type',
  'creationMethod',
  'idOrganization',
]);

export type ListFields = z.infer<typeof ListFieldsSchema>;
