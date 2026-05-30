import { z } from 'zod';

export const GetCardSchema = z.object({
  /**
   * `all` or a comma-separated list of
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges,
   * checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList,
   * idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'address',
        'badges',
        'checkItemStates',
        'closed',
        'coordinates',
        'creationMethod',
        'dueComplete',
        'dateLastActivity',
        'desc',
        'descData',
        'due',
        'dueReminder',
        'idBoard',
        'idChecklists',
        'idLabels',
        'idList',
        'idMembers',
        'idMembersVoted',
        'idShort',
        'idAttachmentCover',
        'labels',
        'limits',
        'locationName',
        'manualCoverAttachment',
        'name',
        'pos',
        'shortLink',
        'shortUrl',
        'subscribed',
        'url',
        'cover',
        'isTemplate',
      ]),
      z.array(
        z.enum([
          'id',
          'address',
          'badges',
          'checkItemStates',
          'closed',
          'coordinates',
          'creationMethod',
          'dueComplete',
          'dateLastActivity',
          'desc',
          'descData',
          'due',
          'dueReminder',
          'idBoard',
          'idChecklists',
          'idLabels',
          'idList',
          'idMembers',
          'idMembersVoted',
          'idShort',
          'idAttachmentCover',
          'labels',
          'limits',
          'locationName',
          'manualCoverAttachment',
          'name',
          'pos',
          'shortLink',
          'shortUrl',
          'subscribed',
          'url',
          'cover',
          'isTemplate',
        ]),
      ),
    ])
    .optional(),
  /**
   * See the [Actions Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
   */
  actions: z.string().optional(),
  /** `true`, `false`, or `cover` */
  attachments: z.union([z.enum(['cover']), z.boolean()]).optional(),
  /**
   * `all` or a comma-separated list of attachment
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  attachmentFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'bytes',
        'date',
        'edgeColor',
        'idMember',
        'isUpload',
        'mimeType',
        'name',
        'previews',
        'url',
        'pos',
      ]),
      z.array(
        z.enum([
          'id',
          'bytes',
          'date',
          'edgeColor',
          'idMember',
          'isUpload',
          'mimeType',
          'name',
          'previews',
          'url',
          'pos',
        ]),
      ),
    ])
    .optional(),
  /** Whether to return member objects for members on the card */
  members: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**:
   * `avatarHash, fullName, initials, username`
   */
  memberFields: z
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
  /** Whether to return member objects for members who voted on the card */
  membersVoted: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**:
   * `avatarHash, fullName, initials, username`
   */
  memberVotedFields: z
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
  checkItemStates: z.boolean().optional(),
  /** Whether to return the checklists on the card. `all` or `none` */
  checklists: z.string().optional(),
  /** `all` or a comma-separated list of `idBoard,idCard,name,pos` */
  checklistFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['idBoard', 'idCard', 'name', 'pos']),
      z.array(z.enum(['idBoard', 'idCard', 'name', 'pos'])),
    ])
    .optional(),
  /** Whether to return the board object the card is on */
  board: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object).
   * **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
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
  /** See the [Lists Nested Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) */
  list: z.boolean().optional(),
  /** Whether to include pluginData on the card with the response */
  pluginData: z.boolean().optional(),
  /** Whether to include sticker models with the response */
  stickers: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of sticker
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  stickerFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled']),
      z.array(z.enum(['id', 'top', 'left', 'zIndex', 'rotate', 'image', 'imageUrl', 'imageScaled'])),
    ])
    .optional(),
  /** Whether to include the customFieldItems */
  customFieldItems: z.boolean().optional(),
  /** The ID of the Card */
  id: z.string(),
});

export type GetCard = z.input<typeof GetCardSchema>;
