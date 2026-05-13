import { z } from 'zod';

export const CreateTokenWebhookSchema = z.object({
  /** A description to be displayed when retrieving information about the webhook. */
  description: z.string().optional(),
  /** The URL that the webhook should POST information to. */
  callbackURL: z.string(),
  /** ID of the object to create a webhook on. */
  idModel: z.unknown(),
  token: z.string(),
});

export type CreateTokenWebhook = z.input<typeof CreateTokenWebhookSchema>;
