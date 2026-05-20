import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { posStringOrNumberSchema } from '#/models/posStringOrNumber';
import { LimitsSchema } from '#/models/limits';

export const CheckItemSchema = apiObject({
  idChecklist: TrelloIDSchema.optional(),
  state: z.enum(['complete', 'incomplete']).optional(),
  id: TrelloIDSchema,
  name: z.string().optional(),
  nameData: z.record(z.string(), z.any()).optional(),
  pos: posStringOrNumberSchema.optional(),
  due: z.coerce.date().nullish(),
  dueReminder: z.number().nullish(),
  idMember: TrelloIDSchema.nullish(),
  limits: LimitsSchema.optional(),
  creationMethod: z.unknown().optional(),
});

export type CheckItem = z.infer<typeof CheckItemSchema>;
