import { z } from 'zod';

export const CreateMemberBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  file: z.string(),
});

export type CreateMemberBoardBackground = z.input<typeof CreateMemberBoardBackgroundSchema>;
