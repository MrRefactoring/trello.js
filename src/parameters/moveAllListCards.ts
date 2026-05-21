import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const MoveAllListCardsSchema = z.object({
  /** The ID of the list */
  id: TrelloIDSchema,
  /** The ID of the board the cards should be moved to */
  idBoard: TrelloIDSchema,
  /** The ID of the list that the cards should be moved to */
  idList: TrelloIDSchema,
});

export type MoveAllListCards = z.input<typeof MoveAllListCardsSchema>;
