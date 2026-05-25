import { z } from 'zod';
import { apiObject } from '#/core';

export const WebhookSchema = apiObject({
  id: z.string(),
  description: z.string().optional(),
  idModel: z.string().optional(),
  callbackURL: z.string().optional(),
  active: z.boolean().optional(),
  consecutiveFailures: z.number().optional(),
  firstConsecutiveFailDate: z.coerce.date().nullish(),
});

export type Webhook = z.infer<typeof WebhookSchema>;
