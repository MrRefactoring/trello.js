import { z } from 'zod';

export const DeleteWebhookSchema = z.object({
  /** ID of the webhook to retrieve. */
  id: z.unknown(),
});

export type DeleteWebhook = z.input<typeof DeleteWebhookSchema>;
