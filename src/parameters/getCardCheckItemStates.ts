import { z } from 'zod';

export const GetCardCheckItemStatesSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['idCheckItem', 'state']),
      z.array(z.enum(['idCheckItem', 'state'])),
    ])
    .optional(),
});

export type GetCardCheckItemStates = z.input<typeof GetCardCheckItemStatesSchema>;
