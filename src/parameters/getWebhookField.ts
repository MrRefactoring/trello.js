import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetWebhookFieldSchema = z.object({
  /** ID of the webhook. */
  id: TrelloIDSchema,
  /** Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel` */
  field: z.enum(['active', 'callbackURL', 'description', 'idModel', 'consecutiveFailures', 'firstConsecutiveFailDate']),
});

export type GetWebhookField = z.input<typeof GetWebhookFieldSchema>;
