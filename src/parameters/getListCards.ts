import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetListCardsSchema = z.object({
  /** The ID of the list */
  id: TrelloIDSchema,
});

export type GetListCards = z.input<typeof GetListCardsSchema>;
