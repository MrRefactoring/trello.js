import { z } from 'zod';

export const GenerateBoardEmailKeySchema = z.object({
  /** The id of the board to update */
  id: z.string(),
});

export type GenerateBoardEmailKey = z.input<typeof GenerateBoardEmailKeySchema>;
