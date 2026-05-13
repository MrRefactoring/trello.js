import { z } from 'zod';

export const UpdatePluginSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
});

export type UpdatePlugin = z.input<typeof UpdatePluginSchema>;
