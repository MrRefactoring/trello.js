import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const ErrorSchema = apiObject({
  code: z.string(),
  message: z.string(),
});

export type Error = z.infer<typeof ErrorSchema>;
