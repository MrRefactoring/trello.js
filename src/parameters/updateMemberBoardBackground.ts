import { z } from 'zod';

export const UpdateMemberBoardBackgroundSchema = z.object({
  /** One of: `dark`, `light`, `unknown` */
  brightness: z.enum(['dark', 'light', 'unknown']).optional(),
  /** Whether the background should be tiled */
  tile: z.boolean().optional(),
  /** The ID or username of the member */
  id: z.unknown(),
  /** The ID of the board background */
  idBackground: z.unknown(),
});

export type UpdateMemberBoardBackground = z.input<typeof UpdateMemberBoardBackgroundSchema>;
