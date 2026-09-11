import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateListFieldSchema = z.object({
  /** The ID of the list */
  id: z.string(),
  /** The field on the List to be updated */
  field: openEnum(['name', 'pos', 'subscribed']),
  /** The new value for the field */
  value: z.union([z.number(), openEnum(['top', 'bottom']), z.boolean()]).optional(),
});

export type UpdateListField = z.input<typeof UpdateListFieldSchema>;
