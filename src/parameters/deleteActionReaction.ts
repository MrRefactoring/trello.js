import { z } from 'zod';

export const DeleteActionReactionSchema = z.object({
  /** The ID of the Action */
  idAction: z.string(),
  /** The ID of the reaction */
  id: z.string(),
});

export type DeleteActionReaction = z.input<typeof DeleteActionReactionSchema>;
