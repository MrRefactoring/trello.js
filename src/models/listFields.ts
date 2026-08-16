import type { z } from 'zod';
import { openEnum } from '#/core';

export const ListFieldsSchema = openEnum([
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
