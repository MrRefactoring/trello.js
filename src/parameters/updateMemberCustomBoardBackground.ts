import { z } from 'zod';

export const UpdateMemberCustomBoardBackgroundSchema = z.object({
  /** One of: `dark`, `light`, `unknown` */
  brightness: z.enum(['dark', 'light', 'unknown']).optional(),
  /** Whether to tile the background */
  tile: z.boolean().optional(),
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /** The ID of the custom background */
  idBackground: z.string(),
});

export type UpdateMemberCustomBoardBackground = z.input<typeof UpdateMemberCustomBoardBackgroundSchema>;
