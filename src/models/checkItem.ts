import { z } from 'zod';
import { apiObject, openEnum } from '#/core';
import { posStringOrNumberSchema } from '#/models/posStringOrNumber';
import { LimitsSchema } from '#/models/limits';

export const CheckItemSchema = apiObject({
  idChecklist: z.string().optional(),
  state: openEnum(['complete', 'incomplete']).optional(),
  id: z.string(),
  name: z.string().optional(),
  nameData: z.record(z.string(), z.any()).optional(),
  pos: posStringOrNumberSchema.optional(),
  due: z.coerce.date().nullish(),
  dueReminder: z.number().nullish(),
  idMember: z.string().nullish(),
  limits: LimitsSchema.optional(),
  creationMethod: z.unknown().optional(),
});

export type CheckItem = z.infer<typeof CheckItemSchema>;
