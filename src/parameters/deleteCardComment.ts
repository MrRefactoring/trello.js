import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteCardCommentSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the comment action to update */
  idAction: TrelloIDSchema,
});

export type DeleteCardComment = z.input<typeof DeleteCardCommentSchema>;
