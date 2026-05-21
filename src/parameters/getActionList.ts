import { z } from 'zod';
import { ListFieldsSchema } from '../models';

export const GetActionListSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of list fields */
  fields: ListFieldsSchema.optional(),
});

export type GetActionList = z.input<typeof GetActionListSchema>;
