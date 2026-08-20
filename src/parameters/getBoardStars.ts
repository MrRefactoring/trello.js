import { z } from 'zod';
import { openEnum } from '#/core';

export const GetBoardStarsSchema = z.object({
  boardId: z.string(),
  /** Valid values: mine, none */
  filter: z.union([z.string(), openEnum(['mine', 'none'])]).optional(),
});

export type GetBoardStars = z.input<typeof GetBoardStarsSchema>;
