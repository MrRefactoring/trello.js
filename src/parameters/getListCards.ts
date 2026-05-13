import { z } from 'zod';

export const GetListCardsSchema = z.object({
  /** The ID of the list */
  id: z.unknown(),
});

export type GetListCards = z.input<typeof GetListCardsSchema>;
