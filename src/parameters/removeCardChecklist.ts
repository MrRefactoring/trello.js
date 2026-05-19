import { z } from 'zod';

export const RemoveCardChecklistSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the checklist to delete */
  idChecklist: z.unknown(),
});

export type RemoveCardChecklist = z.input<typeof RemoveCardChecklistSchema>;
