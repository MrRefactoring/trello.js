import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetTokenWebhookSchema = z.object({
  token: z.string(),
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: TrelloIDSchema,
});

export type GetTokenWebhook = z.input<typeof GetTokenWebhookSchema>;
