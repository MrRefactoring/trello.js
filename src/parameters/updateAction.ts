import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateActionSchema = z.object({
  /** The new text for the comment */
  text: z.string(),
  /** The ID of the Action */
  id: TrelloIDSchema,
});

export type UpdateAction = z.input<typeof UpdateActionSchema>;
