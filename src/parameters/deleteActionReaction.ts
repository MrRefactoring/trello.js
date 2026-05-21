import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteActionReactionSchema = z.object({
  /** The ID of the Action */
  idAction: TrelloIDSchema,
  /** The ID of the reaction */
  id: TrelloIDSchema,
});

export type DeleteActionReaction = z.input<typeof DeleteActionReactionSchema>;
