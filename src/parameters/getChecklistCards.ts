import { z } from 'zod';

export const GetChecklistCardsSchema = z.object({
  /** ID of a checklist. */
  id: z.unknown(),
});

export type GetChecklistCards = z.input<typeof GetChecklistCardsSchema>;
