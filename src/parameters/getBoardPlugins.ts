import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetBoardPluginsSchema = z.object({
  /** The ID of the Board */
  id: TrelloIDSchema,
});

export type GetBoardPlugins = z.input<typeof GetBoardPluginsSchema>;
