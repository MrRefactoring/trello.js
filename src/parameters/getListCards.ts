import { z } from 'zod';

export const GetListCardsSchema = z.object({
  /** The ID of the list */
  id: z.string(),
});

export type GetListCards = z.input<typeof GetListCardsSchema>;
