import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateMemberBoardBackgroundSchema = z.object({
  /** One of: `dark`, `light`, `unknown` */
  brightness: z.enum(['dark', 'light', 'unknown']).optional(),
  /** Whether the background should be tiled */
  tile: z.boolean().optional(),
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The ID of the board background */
  idBackground: TrelloIDSchema,
});

export type UpdateMemberBoardBackground = z.input<typeof UpdateMemberBoardBackgroundSchema>;
