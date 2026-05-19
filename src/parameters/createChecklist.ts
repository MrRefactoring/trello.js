import { z } from 'zod';

export const CreateChecklistSchema = z.object({
  /** The ID of the Card that the checklist should be added to. */
  idCard: z.unknown(),
  /** The name of the checklist. Should be a string of length 1 to 16384. */
  name: z.string().max(16384, 'name must be at most 16384 characters').optional(),
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.unknown().optional(),
  /** The ID of a checklist to copy into the new checklist. */
  idChecklistSource: z.unknown().optional(),
});

export type CreateChecklist = z.input<typeof CreateChecklistSchema>;
