import { z } from 'zod';

export const UpdateActionTextSchema = z.object({
  /** The ID of the action to update */
  id: z.string(),
  /** The new text for the comment */
  value: z.string(),
});

export type UpdateActionText = z.input<typeof UpdateActionTextSchema>;
