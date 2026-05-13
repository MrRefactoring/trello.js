import { z } from 'zod';

export const UpdateCardChecklistItemSchema = z.object({
  /** The ID of the Card */
  idCard: z.unknown(),
  /** The ID of the checklist item to update */
  idCheckItem: z.unknown(),
  /** `top`, `bottom`, or a positive float */
  pos: z.unknown().optional(),
  /** The ID of the item to update. */
  idChecklist: z.unknown(),
});

export type UpdateCardChecklistItem = z.input<typeof UpdateCardChecklistItemSchema>;
