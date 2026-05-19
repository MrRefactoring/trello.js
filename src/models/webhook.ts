import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';

export const WebhookSchema = apiObject({
  id: TrelloIDSchema,
  description: z.string().optional(),
  idModel: TrelloIDSchema.optional(),
  callbackURL: z.string().optional(),
  active: z.boolean().optional(),
  consecutiveFailures: z.number().optional(),
  firstConsecutiveFailDate: z.coerce.date().nullish(),
});

export type Webhook = z.infer<typeof WebhookSchema>;
