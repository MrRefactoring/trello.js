import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetBoardPowerUpsSchema = z.object({
  /** The ID of the board */
  id: TrelloIDSchema,
  /** One of: `enabled` or `available` */
  filter: z.enum(['enabled', 'available']).optional(),
});

export type GetBoardPowerUps = z.input<typeof GetBoardPowerUpsSchema>;
