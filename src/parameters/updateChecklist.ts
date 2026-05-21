import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateChecklistSchema = z.object({
  /** Name of the new checklist being created. Should be length of 1 to 16384. */
  name: z.string().optional(),
  /** Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** ID of a checklist. */
  id: TrelloIDSchema,
});

export type UpdateChecklist = z.input<typeof UpdateChecklistSchema>;
