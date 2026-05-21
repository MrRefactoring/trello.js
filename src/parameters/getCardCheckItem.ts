import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardCheckItemSchema = z.object({
  /** `all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember` */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the checkitem */
  idCheckItem: TrelloIDSchema,
});

export type GetCardCheckItem = z.input<typeof GetCardCheckItemSchema>;
