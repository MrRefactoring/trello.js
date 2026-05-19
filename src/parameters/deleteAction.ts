import { z } from 'zod';

export const DeleteActionSchema = z.object({
  /** The ID of the Action */
  id: z.unknown(),
});

export type DeleteAction = z.input<typeof DeleteActionSchema>;
