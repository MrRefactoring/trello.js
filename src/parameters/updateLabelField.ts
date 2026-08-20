import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateLabelFieldSchema = z.object({
  /** The id of the label */
  id: z.string(),
  /** The field on the Label to update. */
  field: openEnum(['color', 'name']),
  /** The new value for the field. */
  value: z.string(),
});

export type UpdateLabelField = z.input<typeof UpdateLabelFieldSchema>;
