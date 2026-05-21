import { z } from 'zod';

export const GetMemberCustomStickersSchema = z.object({
  /** The ID or username of the member */
  id: z.string(),
});

export type GetMemberCustomStickers = z.input<typeof GetMemberCustomStickersSchema>;
