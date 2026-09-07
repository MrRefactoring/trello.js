import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataChecklistSchema = apiObject({
  id: z.string(),
  name: z.string(),
});

export type ActionDataChecklist = z.infer<typeof ActionDataChecklistSchema>;
