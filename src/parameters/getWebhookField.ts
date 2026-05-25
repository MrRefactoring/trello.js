import { z } from 'zod';

export const GetWebhookFieldSchema = z.object({
  /** ID of the webhook. */
  id: z.string(),
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: z.enum(['active', 'callbackURL', 'description', 'idModel', 'consecutiveFailures', 'firstConsecutiveFailDate']),
});

export type GetWebhookField = z.input<typeof GetWebhookFieldSchema>;
