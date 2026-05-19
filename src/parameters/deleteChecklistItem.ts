import { z } from 'zod';

export const DeleteChecklistItemSchema = z.object({
  /** ID of a checklist. */
  id: z.unknown(),
  /** ID of the check item to retrieve. */
  idCheckItem: z.unknown(),
});

export type DeleteChecklistItem = z.input<typeof DeleteChecklistItemSchema>;
