import { z } from 'zod';
import { openEnum } from '#/core';

export const GetCardCheckItemStatesSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
  /** `all` or a comma-separated list of: `idCheckItem`, `state` */
  fields: z.union([openEnum(['idCheckItem', 'state']), z.array(openEnum(['idCheckItem', 'state']))]).optional(),
});

export type GetCardCheckItemStates = z.input<typeof GetCardCheckItemStatesSchema>;
