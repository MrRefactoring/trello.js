import { z } from 'zod';
import { apiObject } from '#/core';
import { OrganizationSchema } from '#/models/organization';
import { MemberSchema } from '#/models/member';

export const EnterpriseAuditLogSchema = apiObject({
  idAction: z.string().optional(),
  type: z.string().optional(),
  date: z.coerce.date().optional(),
  memberCreator: apiObject({
    id: z.string(),
    username: z.string().optional(),
    fullName: z.string().optional(),
  }).optional(),
  organization: OrganizationSchema.optional(),
  member: MemberSchema.optional(),
});

export type EnterpriseAuditLog = z.infer<typeof EnterpriseAuditLogSchema>;
