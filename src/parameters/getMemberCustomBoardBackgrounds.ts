import { z } from 'zod';

export const GetMemberCustomBoardBackgroundsSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
});

export type GetMemberCustomBoardBackgrounds = z.input<typeof GetMemberCustomBoardBackgroundsSchema>;
