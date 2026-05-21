import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCustomFieldSchema = z.object({
  /** ID of the Custom Field. */
  id: TrelloIDSchema,
});

export type GetCustomField = z.input<typeof GetCustomFieldSchema>;
