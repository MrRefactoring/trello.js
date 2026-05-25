import { z } from 'zod';

export const UpdateLabelFieldSchema = z.object({
  /** The id of the label */
  id: z.string(),
  /** The field on the Label to update. */
  field: z.enum(['color', 'name']),
  /** The new value for the field. */
  value: z.string(),
});

export type UpdateLabelField = z.input<typeof UpdateLabelFieldSchema>;
