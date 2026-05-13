import { z } from 'zod';

export const UpdateCardCheckItemSchema = z.object({
  /** The new name for the checklist item */
  name: z.string().optional(),
  /** One of: `complete`, `incomplete` */
  state: z.enum(['complete', 'incomplete']).optional(),
  /** The ID of the checklist this item is in */
  idChecklist: z.unknown().optional(),
  /** `top`, `bottom`, or a positive float */
  pos: z.unknown().optional(),
  /** A due date for the checkitem */
  due: z.string().optional(),
  /** A dueReminder for the due date on the checkitem */
  dueReminder: z.number().optional(),
  /** The ID of the member to remove from the card */
  idMember: z.unknown().optional(),
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the checkitem */
  idCheckItem: z.unknown(),
});

export type UpdateCardCheckItem = z.input<typeof UpdateCardCheckItemSchema>;
