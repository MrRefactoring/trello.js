import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetChecklistItemSchema = z.object({
  /** One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,. */
  fields: z.enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** ID of a checklist. */
  id: TrelloIDSchema,
  /** ID of the check item to retrieve. */
  idCheckItem: TrelloIDSchema,
});

export type GetChecklistItem = z.input<typeof GetChecklistItemSchema>;
