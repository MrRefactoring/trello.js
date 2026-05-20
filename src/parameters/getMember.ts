import { z } from 'zod';

export const GetMemberSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
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
  boardBackgrounds: z.enum(['all', 'custom', 'default', 'none', 'premium']).optional(),
  /** `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned */
  boardsInvited: z
    .enum(['closed', 'members', 'open', 'organization', 'pinned', 'public', 'starred', 'unpinned'])
    .optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  boardsInvitedFields: z.unknown().optional(),
  /** Whether to return the boardStars or not */
  boardStars: z.boolean().optional(),
  /**
   * See the [Cards Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for
   * additional options
   */
  cards: z.string().optional(),
  /** `all` or `none` */
  customBoardBackgrounds: z.enum(['all', 'none']).optional(),
  /** `all` or `none` */
  customEmoji: z.enum(['all', 'none']).optional(),
  /** `all` or `none` */
  customStickers: z.enum(['all', 'none']).optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.unknown().optional(),
  /**
   * See the [Notifications Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)
   */
  notifications: z.string().optional(),
  /** One of: `all`, `members`, `none`, `public` */
  organizations: z.enum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields: z.unknown().optional(),
  /** Whether or not to include paid account information in the returned workspace object */
  organizationPaidAccount: z.boolean().optional(),
  /** One of: `all`, `members`, `none`, `public` */
  organizationsInvited: z.enum(['all', 'members', 'none', 'public']).optional(),
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationsInvitedFields: z.unknown().optional(),
  /** Whether or not to include paid account information in the returned member object */
  paidAccount: z.boolean().optional(),
  savedSearches: z.boolean().optional(),
  /** `all` or `none` */
  tokens: z.enum(['all', 'none']).optional(),
});

export type GetMember = z.input<typeof GetMemberSchema>;
