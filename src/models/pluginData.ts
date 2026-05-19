import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { TrelloIDSchema } from '#/models/trelloID';

export const PluginDataSchema = apiObject({
  id: TrelloIDSchema,
  idPlugin: TrelloIDSchema.optional(),
  scope: z.enum(['member', 'board', 'organization', 'card']).optional(),
  idModel: TrelloIDSchema.optional(),
  value: z.string().optional(),
  access: z.enum(['private', 'shared']).optional(),
});

export type PluginData = z.infer<typeof PluginDataSchema>;
