import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateActionTextSchema = z.object({
  /** The ID of the action to update */
  id: TrelloIDSchema,
  /** The new text for the comment */
  value: z.string(),
});

export type UpdateActionText = z.input<typeof UpdateActionTextSchema>;
