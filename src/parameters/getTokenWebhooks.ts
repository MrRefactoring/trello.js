import { z } from 'zod';

export const GetTokenWebhooksSchema = z.object({
  token: z.string(),
});

export type GetTokenWebhooks = z.input<typeof GetTokenWebhooksSchema>;
