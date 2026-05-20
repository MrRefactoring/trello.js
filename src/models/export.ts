import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const ExportSchema = apiObject({
  id: TrelloIDSchema,
  status: apiObject({
    attempts: z.number().optional(),
    finished: z.boolean().optional(),
    stage: z.string().optional(),
  }).optional(),
  startedAt: z.coerce.date().optional(),
  size: z.string().nullish(),
  exportUrl: z.string().nullish(),
});

export type Export = z.infer<typeof ExportSchema>;
