import { z } from 'zod';

export const DeactivateEnterpriseMemberSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** ID of the Member to deactive. */
  idMember: z.string(),
  /** Determines whether the user is deactivated or not. */
  value: z.boolean(),
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'activityBlocked',
        'avatarHash',
        'avatarUrl',
        'bio',
        'bioData',
        'confirmed',
        'fullName',
        'idEnterprise',
        'idMemberReferrer',
        'idPremOrgsAdmin',
        'initials',
        'memberType',
        'nonPublic',
        'nonPublicAvailable',
        'products',
        'status',
        'url',
        'username',
        'idBoards',
        'idOrganizations',
      ]),
      z.array(
        z.enum([
          'id',
          'activityBlocked',
          'avatarHash',
          'avatarUrl',
          'bio',
          'bioData',
          'confirmed',
          'fullName',
          'idEnterprise',
          'idMemberReferrer',
          'idPremOrgsAdmin',
          'initials',
          'memberType',
          'nonPublic',
          'nonPublicAvailable',
          'products',
          'status',
          'url',
          'username',
          'idBoards',
          'idOrganizations',
        ]),
      ),
    ])
    .optional(),
  /**
   * Any valid value that the [nested organization
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organizationFields: z
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
  /**
   * Any valid value that the [nested board
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  boardFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'name',
        'desc',
        'descData',
        'closed',
        'idMemberCreator',
        'idOrganization',
        'pinned',
        'url',
        'shortUrl',
        'prefs',
        'labelNames',
        'starred',
        'limits',
        'memberships',
        'enterpriseOwned',
      ]),
      z.array(
        z.enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ]),
      ),
    ])
    .optional(),
});

export type DeactivateEnterpriseMember = z.input<typeof DeactivateEnterpriseMemberSchema>;
