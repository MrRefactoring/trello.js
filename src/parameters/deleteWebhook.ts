import { z } from 'zod';

export const DeleteWebhookSchema = z.object({
  /** ID of the webhook to retrieve. */
  id: z.string(),
});

export type DeleteWebhook = z.input<typeof DeleteWebhookSchema>;
