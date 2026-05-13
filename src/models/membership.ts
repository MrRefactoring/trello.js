import { z } from 'zod';
import { apiObject } from '#/core/apiObject';
import { MemberSchema } from '#/models/member';

export const MembershipSchema = apiObject({
  managed: z.boolean().optional(),
  licensed: z.boolean().optional(),
  admin: z.boolean().optional(),
  deactivated: z.boolean().optional(),
  collaborator: z.boolean().optional(),
  member: MemberSchema.nullish(),
  orgMemberType: z.string().nullish(),
  lastActive: z.unknown().optional(),
});

export type Membership = z.infer<typeof MembershipSchema>;
