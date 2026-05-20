import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const TagSchema = apiObject({
  id: TrelloIDSchema,
  name: z.string().optional(),
});

export type Tag = z.infer<typeof TagSchema>;
