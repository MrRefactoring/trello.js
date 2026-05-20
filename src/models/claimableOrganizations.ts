import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';

export const ClaimableOrganizationsSchema = apiObject({
  organizations: z
    .array(
      apiObject({
        name: z.string().optional(),
        displayName: z.string().optional(),
        activeMembershipCount: z.number().optional(),
        idActiveAdmins: z.array(TrelloIDSchema).optional(),
        products: z.array(z.number()).optional(),
        id: TrelloIDSchema,
        logoUrl: z.string().nullish(),
        /**
         * The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards,
         * or the boards have no activity, this value will be null.
         */
        dateLastActive: z.coerce.date().nullish(),
      }),
    )
    .optional(),
  claimableCount: z.number().optional(),
});

export type ClaimableOrganizations = z.infer<typeof ClaimableOrganizationsSchema>;
