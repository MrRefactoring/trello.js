import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateMemberBoardBackgroundSchema = z.object({
  /** One of: `dark`, `light`, `unknown` */
  brightness: openEnum(['dark', 'light', 'unknown']).optional(),
  /** Whether the background should be tiled */
  tile: z.boolean().optional(),
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the board background */
  idBackground: z.string(),
});

export type UpdateMemberBoardBackground = z.input<typeof UpdateMemberBoardBackgroundSchema>;
