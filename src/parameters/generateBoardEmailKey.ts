import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GenerateBoardEmailKeySchema = z.object({
  /** The id of the board to update */
  id: TrelloIDSchema,
});

export type GenerateBoardEmailKey = z.input<typeof GenerateBoardEmailKeySchema>;
