import { z } from 'zod';

export const GetActionCardSchema = z.object({
  /** The ID of the action */
  id: z.unknown(),
  /** `all` or a comma-separated list of card fields */
  fields: z.unknown().optional(),
});

export type GetActionCard = z.input<typeof GetActionCardSchema>;
