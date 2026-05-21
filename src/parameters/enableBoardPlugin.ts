import { z } from 'zod';

export const EnableBoardPluginSchema = z.object({
  /** The ID of the Power-Up to enable */
  idPlugin: z.string().optional(),
  /** The ID of the Board */
  id: z.string(),
});

export type EnableBoardPlugin = z.input<typeof EnableBoardPluginSchema>;
