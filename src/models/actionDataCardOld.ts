import { z } from 'zod';
import { apiObject } from '#/core';
import { ActionDataPosSchema } from '#/models/actionDataPos';

export const ActionDataCardOldSchema = apiObject({
  id: z.string().optional(),
  name: z.string().optional(),
  idShort: z.number().optional(),
  shortLink: z.string().optional(),
  closed: z.boolean().optional(),
  dateClosed: z.string().optional(),
  dateCompleted: z.string().optional(),
  idList: z.string().optional(),
  idLabels: z.array(z.string()).optional(),
  pos: ActionDataPosSchema.optional(),
  desc: z.string().optional(),
  due: z.string().nullish(),
  start: z.string().nullish(),
  dueComplete: z.boolean().optional(),
});

export type ActionDataCardOld = z.infer<typeof ActionDataCardOldSchema>;
