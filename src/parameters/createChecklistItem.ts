import { z } from 'zod';

export const CreateChecklistItemSchema = z.object({
  /** The name of the new check item on the checklist. Should be a string of length 1 to 16384. */
  name: z.string().max(16384, 'name must be at most 16384 characters'),
  /** The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number. */
  pos: z.union([z.string(), z.number(), z.enum(['top', 'bottom'])]).optional(),
  /** Determines whether the check item is already checked when created. */
  checked: z.boolean().optional(),
  /** A due date for the checkitem */
  due: z.string().optional(),
  /** A dueReminder for the due date on the checkitem */
  dueReminder: z.number().optional(),
  /** An ID of a member resource. */
  idMember: z.string().optional(),
  /** ID of a checklist. */
  id: z.string(),
});

export type CreateChecklistItem = z.input<typeof CreateChecklistItemSchema>;
