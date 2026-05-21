import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetPluginSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type GetPlugin = z.input<typeof GetPluginSchema>;
