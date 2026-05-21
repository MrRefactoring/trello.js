import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateChecklistSchema = z.object({
  /** The ID of the Card that the checklist should be added to. */
  idCard: TrelloIDSchema,
  /** The name of the checklist. Should be a string of length 1 to 16384. **Defaults**: `Checklist` */
  name: z.string().max(16384, 'name must be at most 16384 characters').optional(),
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** The ID of a checklist to copy into the new checklist. */
  idChecklistSource: TrelloIDSchema.optional(),
});

export type CreateChecklist = z.input<typeof CreateChecklistSchema>;
