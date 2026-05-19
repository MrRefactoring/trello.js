import { z } from 'zod';

export const GetBoardCardsSchema = z.object({
  id: z.string(),
});

export type GetBoardCards = z.input<typeof GetBoardCardsSchema>;
