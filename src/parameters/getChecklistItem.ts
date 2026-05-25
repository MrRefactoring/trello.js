import { z } from 'zod';

export const GetChecklistItemSchema = z.object({
  /** One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,. */
  fields: z.enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** ID of a checklist. */
  id: z.string(),
  /** ID of the check item to retrieve. */
  idCheckItem: z.string(),
});

export type GetChecklistItem = z.input<typeof GetChecklistItemSchema>;
