import { z } from 'zod';

export const GetChecklistCardsSchema = z.object({
  /** ID of a checklist. */
  id: z.string(),
});

export type GetChecklistCards = z.input<typeof GetChecklistCardsSchema>;
