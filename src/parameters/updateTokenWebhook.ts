import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UpdateTokenWebhookSchema = z.object({
  /** A description to be displayed when retrieving information about the webhook. */
  description: z.string().optional(),
  /** The URL that the webhook should `POST` information to. */
  callbackURL: z.string().optional(),
  /** ID of the object that the webhook is on. */
  idModel: TrelloIDSchema.optional(),
  token: z.string(),
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: TrelloIDSchema,
});

export type UpdateTokenWebhook = z.input<typeof UpdateTokenWebhookSchema>;
