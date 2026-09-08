import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataOrganizationOldSchema = apiObject({
  id: z.string().optional(),
  name: z.string().optional(),
  desc: z.string().optional(),
  displayName: z.string().optional(),
});

export type ActionDataOrganizationOld = z.infer<typeof ActionDataOrganizationOldSchema>;
