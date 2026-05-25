import { z } from 'zod';

export const GetActionOrganizationSchema = z.object({
  /** The ID of the action */
  id: z.string(),
  /** `all` or a comma-separated list of organization fields */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
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
        z.enum([
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
