import { z } from 'zod';

export const GetCardPluginDataSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
});

export type GetCardPluginData = z.input<typeof GetCardPluginDataSchema>;
