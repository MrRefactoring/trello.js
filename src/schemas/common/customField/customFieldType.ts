import { z } from 'zod';

export const CustomFieldType = z.enum([
  'list',
  'text',
  'number',
  'checkbox',
  'date'
]);
