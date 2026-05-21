import { z } from 'zod';

export const DeleteMemberBoardBackgroundSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
  /** The ID of the board background */
  idBackground: z.string(),
});

export type DeleteMemberBoardBackground = z.input<typeof DeleteMemberBoardBackgroundSchema>;
