import { z } from 'zod';

export const DeleteChecklistItemSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
  /** ID of the check item to retrieve. */
  idCheckItem: z.string(),
});

export type DeleteChecklistItem = z.input<typeof DeleteChecklistItemSchema>;
