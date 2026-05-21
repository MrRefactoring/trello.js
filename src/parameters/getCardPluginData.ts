import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetCardPluginDataSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type GetCardPluginData = z.input<typeof GetCardPluginDataSchema>;
