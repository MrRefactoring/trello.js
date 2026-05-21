import { z } from 'zod';

export const GetChecklistFieldSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
  /** Field to update. */
  field: z.enum(['name', 'pos']),
});

export type GetChecklistField = z.input<typeof GetChecklistFieldSchema>;
