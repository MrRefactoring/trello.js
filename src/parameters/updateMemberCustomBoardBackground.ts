import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateMemberCustomBoardBackgroundSchema = z.object({
  /** One of: `dark`, `light`, `unknown` */
  brightness: z.enum(['dark', 'light', 'unknown']).optional(),
  /** Whether to tile the background */
  tile: z.boolean().optional(),
  /** The ID or username of the member */
  id: z.union([TrelloIDSchema, z.string()]),
  /** The ID of the custom background */
  idBackground: TrelloIDSchema,
});

export type UpdateMemberCustomBoardBackground = z.input<typeof UpdateMemberCustomBoardBackgroundSchema>;
