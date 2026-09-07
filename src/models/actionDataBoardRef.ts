import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataBoardRefSchema = apiObject({
  id: z.string(),
});

export type ActionDataBoardRef = z.infer<typeof ActionDataBoardRefSchema>;
