import { z } from 'zod';
import { apiObject } from '#/core';
import { ActionDataPosSchema } from '#/models/actionDataPos';

export const ActionDataListSchema = apiObject({
  id: z.string(),
  name: z.string(),
  closed: z.boolean().optional(),
  pos: ActionDataPosSchema.optional(),
});

export type ActionDataList = z.infer<typeof ActionDataListSchema>;
