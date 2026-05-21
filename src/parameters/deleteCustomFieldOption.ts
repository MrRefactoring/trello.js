import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCustomFieldOptionSchema = z.object({
  /** ID of the customfielditem. */
  id: TrelloIDSchema,
  /** ID of the customfieldoption to retrieve. */
  idCustomFieldOption: TrelloIDSchema,
});

export type DeleteCustomFieldOption = z.input<typeof DeleteCustomFieldOptionSchema>;
