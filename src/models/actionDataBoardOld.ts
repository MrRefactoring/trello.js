import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataBoardOldSchema = apiObject({
  id: z.string().optional(),
  name: z.string().optional(),
  shortLink: z.string().optional(),
  desc: z.string().optional(),
  prefs: z.record(z.string(), z.any()).optional(),
});

export type ActionDataBoardOld = z.infer<typeof ActionDataBoardOldSchema>;
