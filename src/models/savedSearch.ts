import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { posStringOrNumberSchema } from '#/models/posStringOrNumber';

export const SavedSearchSchema = apiObject({
  id: TrelloIDSchema,
  name: z.string().optional(),
  query: z.string().optional(),
  pos: posStringOrNumberSchema.optional(),
});

export type SavedSearch = z.infer<typeof SavedSearchSchema>;
