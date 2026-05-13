import { z } from 'zod';

export const GetCardChecklistsSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** `all` or `none` */
  checkItems: z.enum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember` */
  checkItemFields: z.enum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']).optional(),
  /** `all` or `none` */
  filter: z.enum(['all', 'none']).optional(),
  /** `all` or a comma-separated list of: `idBoard,idCard,name,pos` */
  fields: z.enum(['all', 'name', 'nameData', 'pos', 'state', 'type']).optional(),
});

export type GetCardChecklists = z.input<typeof GetCardChecklistsSchema>;
