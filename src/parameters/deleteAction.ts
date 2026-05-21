import { z } from 'zod';

export const DeleteActionSchema = z.object({
  /** The ID of the Action */
  id: z.string(),
});

export type DeleteAction = z.input<typeof DeleteActionSchema>;
