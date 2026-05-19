import { z } from 'zod';

export const GetBoardPowerUpsSchema = z.object({
  /** The ID of the board */
  id: z.unknown(),
  /** One of: `enabled` or `available` */
  filter: z.enum(['enabled', 'available']).optional(),
});

export type GetBoardPowerUps = z.input<typeof GetBoardPowerUpsSchema>;
