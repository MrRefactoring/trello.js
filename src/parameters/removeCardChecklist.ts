import { z } from 'zod';

export const RemoveCardChecklistSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the checklist to delete */
  idChecklist: z.string(),
});

export type RemoveCardChecklist = z.input<typeof RemoveCardChecklistSchema>;
