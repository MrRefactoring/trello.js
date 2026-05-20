import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const BoardStarsSchema = apiObject({
  id: TrelloIDSchema,
  idBoard: TrelloIDSchema.optional(),
  pos: z.number().optional(),
});

export type BoardStars = z.infer<typeof BoardStarsSchema>;
