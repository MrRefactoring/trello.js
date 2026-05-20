import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const PluginListingSchema = apiObject({
  id: TrelloIDSchema,
  name: z.string().optional(),
  locale: z.string().optional(),
  description: z.string().optional(),
  overview: z.string().optional(),
});

export type PluginListing = z.infer<typeof PluginListingSchema>;
