import { z } from 'zod';
import { apiObject } from '#/core';
import { ActionDataPosSchema } from '#/models/actionDataPos';

export const ActionDataCardSchema = apiObject({
  id: z.string(),
  name: z.string(),
  idShort: z.number(),
  shortLink: z.string(),
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

export type ActionDataCard = z.infer<typeof ActionDataCardSchema>;
