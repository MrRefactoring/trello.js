import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { MemberSchema } from '#/models/member';
import { MembershipsSchema } from '#/models/memberships';

export const BoardMembersResultSchema = apiObject({
  id: z.string(),
  members: z.array(MemberSchema),
  memberships: z.array(MembershipsSchema),
});

export type BoardMembersResult = z.infer<typeof BoardMembersResultSchema>;
