import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardCheckItemSchema = z.object({
  /** `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember` */
  fields: z
    .union([
      openEnum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember']),
      z.array(openEnum(['name', 'nameData', 'pos', 'state', 'type', 'due', 'dueReminder', 'idMember'])),
    ])
    .optional(),
  /** The ID of the Card */
  id: z.string(),
  /** The ID of the checkitem */
  idCheckItem: z.string(),
});

export type GetCardCheckItem = z.input<typeof GetCardCheckItemSchema>;
