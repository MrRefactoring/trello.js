import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCustomFieldOptionsSchema = z.object({
  /** ID of the customfield. */
  id: TrelloIDSchema,
});

export type GetCustomFieldOptions = z.input<typeof GetCustomFieldOptionsSchema>;
