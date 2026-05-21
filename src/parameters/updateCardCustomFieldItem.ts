import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateCardCustomFieldItemSchema = z.object({
  /** ID of the card that the Custom Field value should be set/updated for */
  idCard: TrelloIDSchema,
  /** ID of the Custom Field on the card. */
  idCustomField: TrelloIDSchema,
  body: z.record(z.string(), z.any()).optional(),
});

export type UpdateCardCustomFieldItem = z.input<typeof UpdateCardCustomFieldItemSchema>;
