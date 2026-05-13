import { z } from 'zod';

export const UpdateListFieldSchema = z.object({
  /** The ID of the list */
  id: z.unknown(),
  /** The field on the List to be updated */
  field: z.enum(['name', 'pos', 'subscribed']),
  /** The new value for the field */
  value: z.union([z.string(), z.number(), z.enum(['top', 'bottom']), z.boolean()]).optional(),
});

export type UpdateListField = z.input<typeof UpdateListFieldSchema>;
