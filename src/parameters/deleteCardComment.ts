import { z } from 'zod';

export const DeleteCardCommentSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The ID of the comment action to update */
  idAction: z.unknown(),
});

export type DeleteCardComment = z.input<typeof DeleteCardCommentSchema>;
