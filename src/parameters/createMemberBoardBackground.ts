import { z } from 'zod';

export const CreateMemberBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  file: z.string(),
});

export type CreateMemberBoardBackground = z.input<typeof CreateMemberBoardBackgroundSchema>;
