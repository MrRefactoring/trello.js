import { z } from 'zod';

export const DeleteTokenWebhookSchema = z.object({
  token: z.string(),
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: z.unknown(),
});

export type DeleteTokenWebhook = z.input<typeof DeleteTokenWebhookSchema>;
