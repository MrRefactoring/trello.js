import { z } from 'zod';

export const EnableBoardPluginSchema = z.object({
  /** The ID of the Power-Up to enable */
  idPlugin: z.unknown().optional(),
  /** The ID of the Board */
  id: z.unknown(),
});

export type EnableBoardPlugin = z.input<typeof EnableBoardPluginSchema>;
