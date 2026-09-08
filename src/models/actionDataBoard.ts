import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataBoardSchema = apiObject({
  id: z.string(),
  name: z.string(),
  shortLink: z.string(),
  desc: z.string().optional(),
  prefs: z.record(z.string(), z.any()).optional(),
});

export type ActionDataBoard = z.infer<typeof ActionDataBoardSchema>;
