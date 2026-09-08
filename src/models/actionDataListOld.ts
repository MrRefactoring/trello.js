import { z } from 'zod';
import { apiObject } from '#/core';
import { ActionDataPosSchema } from '#/models/actionDataPos';

export const ActionDataListOldSchema = apiObject({
  id: z.string().optional(),
  name: z.string().optional(),
  closed: z.boolean().optional(),
  pos: ActionDataPosSchema.optional(),
});

export type ActionDataListOld = z.infer<typeof ActionDataListOldSchema>;
