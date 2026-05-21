import { z } from 'zod';

export const DeleteCardSchema = z.object({
  /** The ID of the Card */
  id: z.string(),
});

export type DeleteCard = z.input<typeof DeleteCardSchema>;
