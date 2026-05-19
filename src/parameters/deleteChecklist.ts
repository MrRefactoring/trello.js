import { z } from 'zod';

export const DeleteChecklistSchema = z.object({
  /** ID of a checklist. */
  id: z.unknown(),
});

export type DeleteChecklist = z.input<typeof DeleteChecklistSchema>;
