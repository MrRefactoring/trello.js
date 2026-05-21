import { z } from 'zod';

export const UpdateActionSchema = z.object({
  /** The new text for the comment */
  text: z.string(),
  /** The ID of the Action */
  id: z.string(),
});

export type UpdateAction = z.input<typeof UpdateActionSchema>;
