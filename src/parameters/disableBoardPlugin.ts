import { z } from 'zod';

export const DisableBoardPluginSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** The ID of the Power-Up to disable */
  idPlugin: z.string(),
});

export type DisableBoardPlugin = z.input<typeof DisableBoardPluginSchema>;
