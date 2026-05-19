import { z } from 'zod';

export const CreateMemberCustomBoardBackgroundSchema = z.object({
  file: z.string(),
  /** The ID or username of the member */
  id: z.unknown(),
});

export type CreateMemberCustomBoardBackground = z.input<typeof CreateMemberCustomBoardBackgroundSchema>;
