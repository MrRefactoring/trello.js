import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteChecklistSchema = z.object({
  /** ID of a checklist. */
  id: TrelloIDSchema,
});

export type DeleteChecklist = z.input<typeof DeleteChecklistSchema>;
