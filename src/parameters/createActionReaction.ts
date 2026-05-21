import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateActionReactionSchema = z.object({
  /** The ID of the action */
  idAction: TrelloIDSchema,
  /** The primary `shortName` of the emoji to add. See [/emoji](#emoji) */
  shortName: z.string().optional(),
  /** The `skinVariation` of the emoji to add. See [/emoji](#emoji) */
  skinVariation: z.string().optional(),
  /** The emoji to add as a native unicode emoji. See [/emoji](#emoji) */
  native: z.string().optional(),
  /** The `unified` value of the emoji to add. See [/emoji](#emoji) */
  unified: z.string().optional(),
});

export type CreateActionReaction = z.input<typeof CreateActionReactionSchema>;
