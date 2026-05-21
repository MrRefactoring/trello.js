import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteTokenWebhookSchema = z.object({
  token: z.string(),
  /** ID of the [Webhooks](ref:webhooks) to retrieve. */
  idWebhook: TrelloIDSchema,
});

export type DeleteTokenWebhook = z.input<typeof DeleteTokenWebhookSchema>;
