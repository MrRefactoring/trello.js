import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetActionFieldSchema = z.object({
  /** The ID of the Action */
  id: TrelloIDSchema,
  /** An action field */
  field: z.union([
    z.string(),
    z.enum(['id', 'idMemberCreator', 'data', 'type', 'date', 'limits', 'display', 'memberCreator']),
  ]),
});

export type GetActionField = z.input<typeof GetActionFieldSchema>;
