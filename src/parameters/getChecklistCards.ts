import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetChecklistCardsSchema = z.object({
  /** ID of a checklist. */
  id: TrelloIDSchema,
});

export type GetChecklistCards = z.input<typeof GetChecklistCardsSchema>;
