import { z } from 'zod';

export const configSchema = z.object({
  key: z.string(),
  token: z.string(),
})
  .strict('Additional properties are not allowed');

export type Config = z.infer<typeof configSchema>;
