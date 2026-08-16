import { z } from 'zod';
import { openEnum } from '#/core';

export const GetChecklistItemsSchema = z.object({
  /** One of: `all`, `none`. */
  filter: openEnum(['all', 'none']).optional(),
  /** One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`. */
  fields: openEnum(['all', 'name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** ID of a checklist. */
  id: z.string(),
});

export type GetChecklistItems = z.input<typeof GetChecklistItemsSchema>;
