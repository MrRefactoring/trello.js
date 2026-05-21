import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateCardCommentSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The comment */
  text: z.string(),
});

export type CreateCardComment = z.input<typeof CreateCardCommentSchema>;
