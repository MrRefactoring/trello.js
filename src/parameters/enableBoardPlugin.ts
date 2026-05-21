import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const EnableBoardPluginSchema = z.object({
  /** The ID of the Power-Up to enable */
  idPlugin: TrelloIDSchema.optional(),
  /** The ID of the Board */
  id: TrelloIDSchema,
});

export type EnableBoardPlugin = z.input<typeof EnableBoardPluginSchema>;
