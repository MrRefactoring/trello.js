import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardCheckItemStatesSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardCheckItemStates = z.input<typeof GetCardCheckItemStatesSchema>;
