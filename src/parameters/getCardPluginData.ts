import { z } from 'zod';

export const GetCardPluginDataSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
});

export type GetCardPluginData = z.input<typeof GetCardPluginDataSchema>;
