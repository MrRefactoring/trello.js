import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const MoveListToBoardSchema = z.object({
  /** The ID of the list */
  id: TrelloIDSchema,
  /** The ID of the board to move the list to */
  value: TrelloIDSchema,
});

export type MoveListToBoard = z.input<typeof MoveListToBoardSchema>;
