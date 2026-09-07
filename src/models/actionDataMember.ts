import { z } from 'zod';
import { apiObject } from '#/core';

export const ActionDataMemberSchema = apiObject({
  id: z.string(),
  name: z.string(),
});

export type ActionDataMember = z.infer<typeof ActionDataMemberSchema>;
