import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetActionReactionSummarySchema = z.object({
  /** The ID of the action */
  idAction: TrelloIDSchema,
});

export type GetActionReactionSummary = z.input<typeof GetActionReactionSummarySchema>;
