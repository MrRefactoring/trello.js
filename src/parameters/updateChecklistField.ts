import { z } from 'zod';
import { posStringOrNumberSchema } from '../models';

export const UpdateChecklistFieldSchema = z.object({
  /** The value to change the checklist name to. Should be a string of length 1 to 16384. */
  value: z.union([posStringOrNumberSchema, z.string()]),
  /** ID of a checklist. */
  id: z.string(),
  /** Field to update. */
  field: z.enum(['name', 'pos']),
});

export type UpdateChecklistField = z.input<typeof UpdateChecklistFieldSchema>;
