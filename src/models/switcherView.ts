import { z } from 'zod';
import { apiObject } from '#/core/apiObject';

export const SwitcherViewSchema = apiObject({
  viewType: z.string().optional(),
  enabled: z.boolean().optional(),
});

export type SwitcherView = z.infer<typeof SwitcherViewSchema>;
