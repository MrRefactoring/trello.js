import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateWebhookSchema = z.object({
  /** A string with a length from `0` to `16384`. */
  description: z.string().max(16384, 'description must be at most 16384 characters').optional(),
  /** A valid URL that is reachable with a `HEAD` and `POST` request. */
  callbackURL: z.string(),
  /** ID of the model to be monitored */
  idModel: TrelloIDSchema,
  /** Determines whether the webhook is active and sending `POST` requests. */
  active: z.boolean().optional(),
});

export type CreateWebhook = z.input<typeof CreateWebhookSchema>;
