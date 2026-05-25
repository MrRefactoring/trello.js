import { z } from 'zod';

export const MoveAllListCardsSchema = z.object({
  /** The ID of the list */
  id: z.string(),
  /** The ID of the board the cards should be moved to */
  idBoard: z.string(),
  /** The ID of the list that the cards should be moved to */
  idList: z.string(),
});

export type MoveAllListCards = z.input<typeof MoveAllListCardsSchema>;
