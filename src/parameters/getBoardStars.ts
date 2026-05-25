import { z } from 'zod';

export const GetBoardStarsSchema = z.object({
  boardId: z.string(),
  /** Valid values: mine, none */
  filter: z.union([z.string(), z.enum(['mine', 'none'])]).optional(),
});

export type GetBoardStars = z.input<typeof GetBoardStarsSchema>;
