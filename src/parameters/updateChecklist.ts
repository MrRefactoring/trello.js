import { z } from 'zod';

export const UpdateChecklistSchema = z.object({
  /** Name of the new checklist being created. Should be length of 1 to 16384. */
  name: z.string().optional(),
  /** Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.unknown().optional(),
  /** ID of a checklist. */
  id: z.unknown(),
});

export type UpdateChecklist = z.input<typeof UpdateChecklistSchema>;
