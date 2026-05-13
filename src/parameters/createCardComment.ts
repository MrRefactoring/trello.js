import { z } from 'zod';

export const CreateCardCommentSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /** The comment */
  text: z.string(),
});

export type CreateCardComment = z.input<typeof CreateCardCommentSchema>;
