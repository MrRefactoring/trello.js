import { z } from 'zod';

export const GetCardSchema = z.object({
  /**
   * `all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**:
   * `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels,
   * idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource) */
  actions: z.string().optional(),
  /** `true`, `false`, or `cover` */
  attachments: z.union([z.enum(['cover']), z.boolean()]).optional(),
  /** `all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  attachmentFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Whether to return member objects for members on the card */
  members: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/).
   * **Defaults**: `avatarHash, fullName, initials, username`
   */
  memberFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Whether to return member objects for members who voted on the card */
  membersVoted: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/).
   * **Defaults**: `avatarHash, fullName, initials, username`
   */
  memberVotedFields: z.union([z.string(), z.array(z.string())]).optional(),
  checkItemStates: z.boolean().optional(),
  /** Whether to return the checklists on the card. `all` or `none` */
  checklists: z.string().optional(),
  /** `all` or a comma-separated list of `idBoard,idCard,name,pos` */
  checklistFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Whether to return the board object the card is on */
  board: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of board
   * [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData,
   * closed, idOrganization, pinned, url, prefs`
   */
  boardFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/) */
  list: z.boolean().optional(),
  /** Whether to include pluginData on the card with the response */
  pluginData: z.boolean().optional(),
  /** Whether to include sticker models with the response */
  stickers: z.boolean().optional(),
  /** `all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  stickerFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Whether to include the customFieldItems */
  customFieldItems: z.boolean().optional(),
  /** The ID of the Card */
  id: z.unknown(),
});

export type GetCard = z.input<typeof GetCardSchema>;
