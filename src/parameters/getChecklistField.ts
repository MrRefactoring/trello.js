import { z } from 'zod';
import { openEnum } from '#/core';

export const GetChecklistFieldSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
  /** Field to update. */
  field: openEnum(['name', 'pos']),
});

export type GetChecklistField = z.input<typeof GetChecklistFieldSchema>;
