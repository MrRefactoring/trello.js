import { z } from 'zod';

export const UpdateCardCommentSchema = z.object({
  /** The new text for the comment */
  text: z.string(),
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the comment action to update */
  idAction: z.unknown(),
});

export type UpdateCardComment = z.input<typeof UpdateCardCommentSchema>;
