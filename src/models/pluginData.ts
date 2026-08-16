import { z } from 'zod';
import { apiObject, openEnum } from '#/core';

export const PluginDataSchema = apiObject({
  id: z.string(),
  idPlugin: z.string().optional(),
  scope: openEnum(['member', 'board', 'organization', 'card']).optional(),
  idModel: z.string().optional(),
  value: z.string().optional(),
  access: openEnum(['private', 'shared']).optional(),
});

export type PluginData = z.infer<typeof PluginDataSchema>;
