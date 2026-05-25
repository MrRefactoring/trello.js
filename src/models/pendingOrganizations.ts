import { z } from 'zod';
import { apiObject } from '#/core';

export const PendingOrganizationsSchema = apiObject({
  id: z.string(),
  idMember: z.string().optional(),
  memberRequestor: apiObject({
    id: z.string(),
    fullName: z.string().optional(),
  }).optional(),
  date: z.coerce.date().optional(),
  displayName: z.string().optional(),
  membershipCount: z.number().optional(),
  logoUrl: z.string().nullish(),
  transferability: apiObject({
    transferrable: z.boolean().optional(),
    newBillableMembers: z
      .array(
        apiObject({
          id: z.string(),
          fullName: z.string().optional(),
          username: z.string().optional(),
          initials: z.string().optional(),
          avatarHash: z.string().optional(),
        }),
      )
      .optional(),
    restrictedMembers: z
      .array(
        apiObject({
          id: z.string(),
          fullName: z.string().optional(),
          username: z.string().optional(),
          initials: z.string().optional(),
          avatarHash: z.string().optional(),
        }),
      )
      .optional(),
  }).optional(),
});

export type PendingOrganizations = z.infer<typeof PendingOrganizationsSchema>;
