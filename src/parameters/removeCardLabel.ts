import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveCardLabelSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the label to remove */
  idLabel: TrelloIDSchema,
});

export type RemoveCardLabel = z.input<typeof RemoveCardLabelSchema>;
