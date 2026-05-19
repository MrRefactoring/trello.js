import { z } from 'zod';

export const GetPluginSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
});

export type GetPlugin = z.input<typeof GetPluginSchema>;
