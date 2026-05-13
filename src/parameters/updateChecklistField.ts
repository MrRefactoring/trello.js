import { z } from 'zod';

export const UpdateChecklistFieldSchema = z.object({
  /** The value to change the checklist name to. Should be a string of length 1 to 16384. */
  value: z.union([z.unknown(), z.unknown()]),
  /** ID of a checklist. */
  id: z.unknown(),
  /** Field to update. */
  field: z.enum(['name', 'pos']),
});

export type UpdateChecklistField = z.input<typeof UpdateChecklistFieldSchema>;
