import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCardSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type DeleteCard = z.input<typeof DeleteCardSchema>;
