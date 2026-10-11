import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardChecklistsSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** `all` or `none` */
  checkItems: openEnum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember` */
  checkItemFields: z
    .union([
      openEnum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']),
      z.array(openEnum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])),
    ])
    .optional(),
  /** `all` or `none` */
  filter: openEnum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `idBoard,idCard,name,pos` */
  fields: z
    .union([
      openEnum(['all', 'name', 'nameData', 'pos', 'state', 'type']),
      z.array(openEnum(['all', 'name', 'nameData', 'pos', 'state', 'type'])),
    ])
    .optional(),
});

export type GetCardChecklists = z.input<typeof GetCardChecklistsSchema>;
