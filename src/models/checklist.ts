import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { posStringOrNumberSchema } from '#/models/posStringOrNumber';
import { CheckItemSchema } from '#/models/checkItem';
import { LimitsSchema } from '#/models/limits';

export const ChecklistSchema = apiObject({
  id: TrelloIDSchema,
  name: z.string().optional(),
  idBoard: TrelloIDSchema.optional(),
  idCard: TrelloIDSchema.optional(),
  pos: posStringOrNumberSchema.optional(),
  checkItems: z.array(CheckItemSchema).optional(),
  limits: LimitsSchema.optional(),
});

export type Checklist = z.infer<typeof ChecklistSchema>;
