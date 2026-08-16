import { z } from 'zod';
import { openEnum } from '#/core';

export const CreateCardChecklistSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** The name of the checklist */
  name: z.string().optional(),
  /** The ID of a source checklist to copy into the new one */
  idChecklistSource: z.string().optional(),
  /** The position of the checklist on the card. One of: `top`, `bottom`, or a positive number. */
  pos: z.union([z.string(), z.number(), openEnum(['top', 'bottom'])]).optional(),
});

export type CreateCardChecklist = z.input<typeof CreateCardChecklistSchema>;
