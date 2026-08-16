import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateCardCheckItemSchema = z.object({
  /** The new name for the checklist item */
  name: z.string().optional(),
  /** One of: `complete`, `incomplete` */
  state: openEnum(['complete', 'incomplete']).optional(),
  /** The ID of the checklist this item is in */
  idChecklist: z.string().optional(),
  /** `top`, `bottom`, or a positive float */
  pos: z.union([z.string(), z.number(), openEnum(['top', 'bottom'])]).optional(),
  /** A due date for the checkitem */
  due: z.string().optional(),
  /** A dueReminder for the due date on the checkitem */
  dueReminder: z.number().optional(),
  /** The ID of the member to remove from the card */
  idMember: z.string().optional(),
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the checkitem */
  idCheckItem: z.string(),
});

export type UpdateCardCheckItem = z.input<typeof UpdateCardCheckItemSchema>;
