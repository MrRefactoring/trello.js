export interface GetCard {
  /** The ID of the Card */
  id: string;
  /**
   * `all` or a comma-separated list of
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges,
   * checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList,
   * idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`
   */
  fields?: string;
  /** See the [Actions Nested Resource](ref:actions-nested-resource) */
  actions?: string;
  /** `true`, `false`, or `cover` */
  attachments?: string;
  /**
   * `all` or a comma-separated list of attachment
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  attachmentFields?: string;
  /** Whether to return member objects for members on the card */
  members?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**:
   * `avatarHash, fullName, initials, username`
   */
  memberFields?: string;
  /** Whether to return member objects for members who voted on the card */
  membersVoted?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/). **Defaults**:
   * `avatarHash, fullName, initials, username`
   */
  memberVotedFields?: string;
  checkItemStates?: boolean;
  /** Whether to return the checklists on the card. `all` or `none` */
  checklists?: string;
  /** `all` or a comma-separated list of `idBoard,idCard,name,pos` */
  checklistFields?: string;
  /** Whether to return the board object the card is on */
  board?: boolean;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#board-object).
   * **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`
   */
  boardFields?: string;
  /** See the [Lists Nested Resource](ref:lists-nested-resource) */
  list?: boolean;
  /** Whether to include pluginData on the card with the response */
  pluginData?: boolean;
  /** Whether to include sticker models with the response */
  stickers?: boolean;
  /**
   * `all` or a comma-separated list of sticker
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  stickerFields?: string;
  /** Whether to include the customFieldItems */
  customFieldItems?: boolean;
}
