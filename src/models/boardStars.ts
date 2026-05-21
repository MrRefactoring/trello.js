import { z } from 'zod';
import { apiObject } from '#/core';

export const BoardStarsSchema = apiObject({
  id: z.string(),
  idBoard: z.string().optional(),
  pos: z.number().optional(),
});

export type BoardStars = z.infer<typeof BoardStarsSchema>;
