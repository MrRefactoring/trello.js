import { z } from 'zod';

export const DeleteChecklistSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
});

export type DeleteChecklist = z.input<typeof DeleteChecklistSchema>;
