import { z } from 'zod';

export const UpdateWebhookSchema = z.object({
  /** A string with a length from `0` to `16384`. */
  description: z.string().max(16384, 'description must be at most 16384 characters').optional(),
  /** A valid URL that is reachable with a `HEAD` and `POST` request. */
  callbackURL: z.string().optional(),
  /** ID of the model to be monitored */
  idModel: z.unknown().optional(),
  /** Determines whether the webhook is active and sending `POST` requests. */
  active: z.boolean().optional(),
  /** ID of the webhook to retrieve. */
  id: z.unknown(),
});

export type UpdateWebhook = z.input<typeof UpdateWebhookSchema>;
