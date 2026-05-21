import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetChecklistFieldSchema = z.object({
  /** ID of a checklist. */
  id: TrelloIDSchema,
  /** Field to update. */
  field: z.enum(['name', 'pos']),
});

export type GetChecklistField = z.input<typeof GetChecklistFieldSchema>;
