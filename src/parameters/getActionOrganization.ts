import { z } from 'zod';
import { openEnum } from '#/core';

export const GetActionOrganizationSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of organization fields */
  fields: z
    .union([
      openEnum([
        'id',
        'billableMemberCount',
        'desc',
        'descData',
        'displayName',
        'idBoards',
        'invitations',
        'invited',
        'logoHash',
        'memberships',
        'name',
        'powerUps',
        'prefs',
        'premiumFeatures',
        'products',
        'url',
        'website',
      ]),
      z.array(
        openEnum([
          'id',
          'billableMemberCount',
          'desc',
          'descData',
          'displayName',
          'idBoards',
          'invitations',
          'invited',
          'logoHash',
          'memberships',
          'name',
          'powerUps',
          'prefs',
          'premiumFeatures',
          'products',
          'url',
          'website',
        ]),
      ),
    ])
    .optional(),
});

export type GetActionOrganization = z.input<typeof GetActionOrganizationSchema>;
