import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataOrganizationSchema = apiObject({
  id: z.string(),
  name: z.string(),
  desc: z.string().optional(),
  displayName: z.string().optional(),
});

export type ActionDataOrganization = z.infer<typeof ActionDataOrganizationSchema>;
