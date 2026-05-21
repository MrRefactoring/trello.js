import { z } from 'zod';
import { apiObject } from '#/core';

export const TagSchema = apiObject({
  id: z.string(),
  name: z.string().optional(),
});

export type Tag = z.infer<typeof TagSchema>;
