import { z } from 'zod';

export const GetWebhookSchema = z.object({
  /** ID of the webhook to retrieve. */
  id: z.string(),
});

export type GetWebhook = z.input<typeof GetWebhookSchema>;
