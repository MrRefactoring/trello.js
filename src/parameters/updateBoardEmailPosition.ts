import { z } from 'zod';
import { openEnum } from '#/core';

export const UpdateBoardEmailPositionSchema = z.object({
  /** The id of the board to update */
  id: z.string(),
  /** Valid values: bottom, top. Determines the position of the email address. */
  value: openEnum(['bottom', 'top']),
});

export type UpdateBoardEmailPosition = z.input<typeof UpdateBoardEmailPositionSchema>;
