import { z } from 'zod';

export const GetActionReactionSummarySchema = z.object({
  /** The ID of the action */
  idAction: z.string(),
});

export type GetActionReactionSummary = z.input<typeof GetActionReactionSummarySchema>;
