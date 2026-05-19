import { z } from 'zod';

export const CreateCardChecklistSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The name of the checklist */
  name: z.string().optional(),
  /** The ID of a source checklist to copy into the new one */
  idChecklistSource: z.unknown().optional(),
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.string().optional(),
});

export type CreateCardChecklist = z.input<typeof CreateCardChecklistSchema>;
