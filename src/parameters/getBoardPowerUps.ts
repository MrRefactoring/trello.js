import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardPowerUpsSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** One of: `enabled` or `available` */
  filter: openEnum(['enabled', 'available']).optional(),
});

export type GetBoardPowerUps = z.input<typeof GetBoardPowerUpsSchema>;
