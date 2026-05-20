import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const EnterpriseAdminSchema = apiObject({
  id: TrelloIDSchema,
  fullName: z.string().optional(),
  username: z.string().optional(),
});

export type EnterpriseAdmin = z.infer<typeof EnterpriseAdminSchema>;
