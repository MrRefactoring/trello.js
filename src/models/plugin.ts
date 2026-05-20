import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const PluginSchema = apiObject({
  id: TrelloIDSchema,
  idBoard: z.string().nullish(),
  idPlugin: z.string().nullish(),
  promotional: z.boolean().optional(),
  author: z.string().nullish(),
  capabilities: z.array(z.string()).optional(),
  capabilitiesOptions: z.array(z.unknown()).optional(),
  categories: z.array(z.string()).optional(),
  claimedDomains: z.array(z.unknown()).optional(),
  idOrganizationOwner: z.string().nullish(),
  iframeConnectorUrl: z.string().nullish(),
  isCompliantWithPrivacyStandards: z.boolean().optional(),
  moderatedState: z.string().nullish(),
  name: z.string().nullish(),
  privacyUrl: z.string().nullish(),
  public: z.boolean().optional(),
  supportEmail: z.string().nullish(),
  tags: z.array(z.string()).optional(),
  url: z.string().nullish(),
  usageBrackets: apiObject({
    boards: z.number().optional(),
  }).nullish(),
  icon: apiObject({
    url: z.string().optional(),
  }).nullish(),
  heroImageUrl: apiObject({
    '@1x': z.string().optional(),
    '@2x': z.string().optional(),
    _id: z.string().optional(),
  }).nullish(),
  listing: apiObject({
    name: z.string().nullish(),
    locale: z.string().nullish(),
    description: z.string().nullish(),
    overview: z.string().nullish(),
    updates: z.array(z.unknown()).optional(),
  }).nullish(),
});

export type Plugin = z.infer<typeof PluginSchema>;
