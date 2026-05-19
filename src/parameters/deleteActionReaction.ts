import { z } from 'zod';

export const DeleteActionReactionSchema = z.object({
  /** The ID of the Action */
  idAction: z.unknown(),
  /** The ID of the reaction */
  id: z.unknown(),
});

export type DeleteActionReaction = z.input<typeof DeleteActionReactionSchema>;
