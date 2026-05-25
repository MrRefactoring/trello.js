import { z } from 'zod';
import { apiObject } from '#/core';

export const PluginDataSchema = apiObject({
  id: z.string(),
  idPlugin: z.string().optional(),
  scope: z.enum(['member', 'board', 'organization', 'card']).optional(),
  idModel: z.string().optional(),
  value: z.string().optional(),
  access: z.enum(['private', 'shared']).optional(),
});

export type PluginData = z.infer<typeof PluginDataSchema>;
