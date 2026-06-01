import { z } from 'zod';

export const SearchSchema = z.object({
  /** The search query with a length of 1 to 16384 characters */
  query: z.string().max(16834, 'query must be at most 16834 characters'),
  /** `mine` or a comma-separated list of Board IDs */
  idBoards: z.union([z.enum(['mine']), z.string()]).optional(),
  /** A comma-separated list of Organization IDs */
  idOrganizations: z.union([z.string(), z.array(z.string())]).optional(),
  /** A comma-separated list of Card IDs */
  idCards: z.union([z.string(), z.array(z.string())]).optional(),
  /**
   * What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`,
   * `cards`, `members`, `organizations`
   */
  modelTypes: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['actions', 'boards', 'cards', 'members', 'organizations']),
      z.array(z.enum(['actions', 'boards', 'cards', 'members', 'organizations'])),
    ])
    .optional(),
  /**
   * All or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`,
   * `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`,
   * `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`
   */
  boardFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'closed',
        'dateLastActivity',
        'dateLastView',
        'desc',
        'descData',
        'idOrganization',
        'invitations',
        'invited',
        'labelNames',
        'memberships',
        'name',
        'pinned',
        'powerUps',
        'prefs',
        'shortLink',
        'shortUrl',
        'starred',
        'subscribed',
        'url',
      ]),
      z.array(
        z.enum([
          'closed',
          'dateLastActivity',
          'dateLastView',
          'desc',
          'descData',
          'idOrganization',
          'invitations',
          'invited',
          'labelNames',
          'memberships',
          'name',
          'pinned',
          'powerUps',
          'prefs',
          'shortLink',
          'shortUrl',
          'starred',
          'subscribed',
          'url',
        ]),
      ),
    ])
    .optional(),
  /** The maximum number of boards returned. Maximum: 1000 */
  boardsLimit: z.number().optional(),
  /** Whether to include the parent organization with board results */
  boardOrganization: z.boolean().optional(),
  /**
   * All or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`,
   * `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`,
   * `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`
   */
  cardFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'badges',
        'checkItemStates',
        'closed',
        'dateLastActivity',
        'desc',
        'descData',
        'due',
        'idAttachmentCover',
        'idBoard',
        'idChecklists',
        'idLabels',
        'idList',
        'idMembers',
        'idMembersVoted',
        'idShort',
        'labels',
        'manualCoverAttachment',
        'name',
        'pos',
        'shortLink',
        'shortUrl',
        'subscribed',
        'url',
      ]),
      z.array(
        z.enum([
          'badges',
          'checkItemStates',
          'closed',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'idAttachmentCover',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'labels',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
        ]),
      ),
    ])
    .optional(),
  /** The maximum number of cards to return. Maximum: 1000 */
  cardsLimit: z.number().optional(),
  /** The page of results for cards. Maximum: 100 */
  cardsPage: z.number().optional(),
  /** Whether to include the parent board with card results */
  cardBoard: z.boolean().optional(),
  /** Whether to include the parent list with card results */
  cardList: z.boolean().optional(),
  /** Whether to include member objects with card results */
  cardMembers: z.boolean().optional(),
  /** Whether to include sticker objects with card results */
  cardStickers: z.boolean().optional(),
  /**
   * Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card
   * cover attachments.
   */
  cardAttachments: z.string().optional(),
  /**
   * All or a comma-separated list of `billableMemberCount`, `desc`, `descData`, `displayName`, `idBoards`,
   * `invitations`, `invited`, `logoHash`, `memberships`, `name`, `powerUps`, `prefs`, `premiumFeatures`, `products`,
   * `url`, `website`
   */
  organizationFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
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
  /** The maximum number of Workspaces to return. Maximum 1000 */
  organizationsLimit: z.number().optional(),
  /**
   * All or a comma-separated list of: `avatarHash`, `bio`, `bioData`, `confirmed`, `fullName`, `idPremOrgsAdmin`,
   * `initials`, `memberType`, `products`, `status`, `url`, `username`
   */
  memberFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'avatarHash',
        'bio',
        'bioData',
        'confirmed',
        'fullName',
        'idPremOrgsAdmin',
        'initials',
        'memberType',
        'products',
        'status',
        'url',
        'username',
      ]),
      z.array(
        z.enum([
          'avatarHash',
          'bio',
          'bioData',
          'confirmed',
          'fullName',
          'idPremOrgsAdmin',
          'initials',
          'memberType',
          'products',
          'status',
          'url',
          'username',
        ]),
      ),
    ])
    .optional(),
  /** The maximum number of members to return. Maximum 1000 */
  membersLimit: z.number().optional(),
  /**
   * By default, Trello searches for each word in your query against exactly matching words within Member content.
   * Specifying partial to be true means that we will look for content that starts with any of the words in your query.
   * If you are looking for a Card titled "My Development Status Report", by default you would need to search for
   * "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".
   */
  partial: z.boolean().optional(),
});

export type Search = z.input<typeof SearchSchema>;
