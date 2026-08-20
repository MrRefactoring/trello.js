import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardChecklistsSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** `all` or `none` */
  checkItems: openEnum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember` */
  checkItemFields: openEnum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** `all` or `none` */
  filter: openEnum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `idBoard,idCard,name,pos` */
  fields: openEnum(['all', 'name', 'nameData', 'pos', 'state', 'type']).optional(),
});

export type GetCardChecklists = z.input<typeof GetCardChecklistsSchema>;
