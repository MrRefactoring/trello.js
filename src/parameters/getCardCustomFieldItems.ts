import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardCustomFieldItemsSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type GetCardCustomFieldItems = z.input<typeof GetCardCustomFieldItemsSchema>;
