import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateCardChecklistItemSchema = z.object({
  /** The ID of the Card */
  idCard: TrelloIDSchema,
  /** The ID of the checklist item to update */
  idCheckItem: TrelloIDSchema,
  /** `top`, `bottom`, or a positive float */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** The ID of the item to update. */
  idChecklist: TrelloIDSchema,
});

export type UpdateCardChecklistItem = z.input<typeof UpdateCardChecklistItemSchema>;
