import { z } from 'zod';
import { apiObject } from '#/core';

export const EnterpriseAdminSchema = apiObject({
  id: z.string(),
  fullName: z.string().optional(),
  username: z.string().optional(),
});

export type EnterpriseAdmin = z.infer<typeof EnterpriseAdminSchema>;
