import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const AddCardLabelSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the label to add */
  value: TrelloIDSchema.optional(),
});

export type AddCardLabel = z.input<typeof AddCardLabelSchema>;
