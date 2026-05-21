import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: TrelloIDSchema,
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: TrelloIDSchema,
});

export type GetCustomFieldOption = z.input<typeof GetCustomFieldOptionSchema>;
