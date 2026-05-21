import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteChecklistItemSchema = z.object({
  /** ID of a checklist. */
  id: TrelloIDSchema,
  /** ID of the check item to retrieve. */
  idCheckItem: TrelloIDSchema,
});

export type DeleteChecklistItem = z.input<typeof DeleteChecklistItemSchema>;
