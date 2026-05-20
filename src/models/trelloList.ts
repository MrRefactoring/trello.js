import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { LimitsSchema } from '#/models/limits';

export const TrelloListSchema = apiObject({
  id: TrelloIDSchema,
  /** The name of the list */
  name: z.string().optional(),
  closed: z.boolean().optional(),
  pos: z.number().optional(),
  softLimit: z.string().nullish(),
  idBoard: z.string().optional(),
  subscribed: z.boolean().optional(),
  limits: LimitsSchema.optional(),
  color: z.string().nullish(),
  datasource: apiObject({
    filter: z.boolean().optional(),
  }).optional(),
  type: z.string().nullish(),
  creationMethod: z.unknown().optional(),
  idOrganization: z.string().nullish(),
  nodeId: z.string().optional(),
});

export type TrelloList = z.infer<typeof TrelloListSchema>;
