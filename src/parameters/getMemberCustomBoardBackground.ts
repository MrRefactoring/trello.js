import { z } from 'zod';

export const GetMemberCustomBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /** The ID of the custom background */
  idBackground: z.string(),
});

export type GetMemberCustomBoardBackground = z.input<typeof GetMemberCustomBoardBackgroundSchema>;
