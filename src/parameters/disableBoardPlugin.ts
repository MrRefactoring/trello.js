import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DisableBoardPluginSchema = z.object({
  /** The ID of the board */
  id: TrelloIDSchema,
  /** The ID of the Power-Up to disable */
  idPlugin: TrelloIDSchema,
});

export type DisableBoardPlugin = z.input<typeof DisableBoardPluginSchema>;
