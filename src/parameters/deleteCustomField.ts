import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCustomFieldSchema = z.object({
  /** ID of the Custom Field. */
  id: TrelloIDSchema,
});

export type DeleteCustomField = z.input<typeof DeleteCustomFieldSchema>;
