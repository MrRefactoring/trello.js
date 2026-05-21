import { z } from 'zod';
import { apiObject } from '#/core';
import { MemberSchema } from '#/models/member';

export const MembershipsSchema = apiObject({
  id: z.string(),
  idMember: z.string().optional(),
  memberType: z.string().optional(),
  unconfirmed: z.boolean().optional(),
  deactivated: z.boolean().optional(),
  member: MemberSchema.nullish(),
  orgMemberType: z.string().nullish(),
  lastActive: z.unknown().optional(),
});

export type Memberships = z.infer<typeof MembershipsSchema>;
