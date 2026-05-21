import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteActionSchema = z.object({
  /** The ID of the Action */
  id: TrelloIDSchema,
});

export type DeleteAction = z.input<typeof DeleteActionSchema>;
