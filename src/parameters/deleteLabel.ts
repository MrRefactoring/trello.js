import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteLabelSchema = z.object({
  /** The ID of the Label */
  id: TrelloIDSchema,
});

export type DeleteLabel = z.input<typeof DeleteLabelSchema>;
