import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteWebhookSchema = z.object({
  /** ID of the webhook to retrieve. */
  id: TrelloIDSchema,
});

export type DeleteWebhook = z.input<typeof DeleteWebhookSchema>;
