import { z } from 'zod';

export const GetBoardPluginsSchema = z.object({
  /** The ID of the Board */
  id: z.unknown(),
});

export type GetBoardPlugins = z.input<typeof GetBoardPluginsSchema>;
