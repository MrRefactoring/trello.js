import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetWebhookSchema = z.object({
  /** ID of the webhook to retrieve. */
  id: TrelloIDSchema,
});

export type GetWebhook = z.input<typeof GetWebhookSchema>;
