import { z } from 'zod';
import { apiObject } from '#/core';
import { posStringOrNumberSchema } from '#/models/posStringOrNumber';
import { CheckItemSchema } from '#/models/checkItem';
import { LimitsSchema } from '#/models/limits';

export const ChecklistSchema = apiObject({
  id: z.string(),
  name: z.string().optional(),
  idBoard: z.string().optional(),
  idCard: z.string().optional(),
  pos: posStringOrNumberSchema.optional(),
  checkItems: z.array(CheckItemSchema).optional(),
  limits: LimitsSchema.optional(),
});

export type Checklist = z.infer<typeof ChecklistSchema>;
