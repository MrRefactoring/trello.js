import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateCardChecklistItemSchema = z.object({
  /** The ID of the Card */
  idCard: z.string(),
  /** The ID of the checklist item to update */
  idCheckItem: z.string(),
  /** `top`, `bottom`, or a positive float */
  pos: z.union([z.string(), z.number(), openEnum(['top', 'bottom'])]).optional(),
  /** The ID of the item to update. */
  idChecklist: z.string(),
});

export type UpdateCardChecklistItem = z.input<typeof UpdateCardChecklistItemSchema>;
