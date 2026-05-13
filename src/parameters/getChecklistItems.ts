import { z } from 'zod';

export const GetChecklistItemsSchema = z.object({
  /** One of: `all`, `none`. */
  filter: z.enum(['all', 'none']).optional(),
  /** One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`. */
  fields: z.enum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** ID of a checklist. */
  id: z.unknown(),
});

export type GetChecklistItems = z.input<typeof GetChecklistItemsSchema>;
