import { z } from 'zod';
import { openEnum } from '#/core';

export const GetMemberSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /**
   * See the [Actions Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
   */
  actions: z.string().optional(),
  /**
   * See the [Boards Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)
   */
  boards: z.string().optional(),
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  boardBackgrounds: openEnum(['all', 'custom', 'default', 'none', 'premium']).optional(),
  /** `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned */
  boardsInvited: openEnum([
    'closed',
    'members',
    'open',
    'organization',
    'pinned',
    'public',
    'starred',
    'unpinned',
  ]).optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  boardsInvitedFields: z
    .union([
      openEnum([
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
        openEnum([
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
  /** Whether to return the boardStars or not */
  boardStars: z.boolean().optional(),
  /**
   * See the [Cards Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for
   * additional options
   */
  cards: z.string().optional(),
  /** `all` or `none` */
  customBoardBackgrounds: openEnum(['all', 'none']).optional(),
  /** `all` or `none` */
  customEmoji: openEnum(['all', 'none']).optional(),
  /** `all` or `none` */
  customStickers: openEnum(['all', 'none']).optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z
    .union([
      openEnum([
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
        openEnum([
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
   * See the [Notifications Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
   */
  notifications: z.string().optional(),
  /** One of: `all`, `members`, `none`, `public` */
  organizations: openEnum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields: z
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
  /** Whether or not to include paid account information in the returned workspace object */
  organizationPaidAccount: z.boolean().optional(),
  /** One of: `all`, `members`, `none`, `public` */
  organizationsInvited: openEnum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationsInvitedFields: z
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
  /** Whether or not to include paid account information in the returned member object */
  paidAccount: z.boolean().optional(),
  savedSearches: z.boolean().optional(),
  /** `all` or `none` */
  tokens: openEnum(['all', 'none']).optional(),
});

export type GetMember = z.input<typeof GetMemberSchema>;
