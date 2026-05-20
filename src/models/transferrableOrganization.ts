import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const TransferrableOrganizationSchema = apiObject({
  transferrable: z.boolean().optional(),
  newBillableMembers: z
    .array(
      apiObject({
        id: TrelloIDSchema,
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
        id: TrelloIDSchema,
        fullName: z.string().optional(),
        username: z.string().optional(),
        initials: z.string().optional(),
        avatarHash: z.string().optional(),
      }),
    )
    .optional(),
});

export type TransferrableOrganization = z.infer<typeof TransferrableOrganizationSchema>;
