import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateBoardEmailPositionSchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
  /** Valid values: bottom, top. Determines the position of the email address. */
  value: z.enum(['bottom', 'top']),
});

export type UpdateBoardEmailPosition = z.input<typeof UpdateBoardEmailPositionSchema>;
