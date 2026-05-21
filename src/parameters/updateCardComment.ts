import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateCardCommentSchema = z.object({
  /** The new text for the comment */
  text: z.string(),
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the comment action to update */
  idAction: TrelloIDSchema,
});

export type UpdateCardComment = z.input<typeof UpdateCardCommentSchema>;
