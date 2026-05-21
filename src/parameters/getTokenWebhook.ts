import { z } from 'zod';

export const GetTokenWebhookSchema = z.object({
  token: z.string(),
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: z.string(),
});

export type GetTokenWebhook = z.input<typeof GetTokenWebhookSchema>;
