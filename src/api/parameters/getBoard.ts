export interface GetBoard {
  id: string;
  /**
   * This is a nested resource. Read more about actions as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  actions?: string;
  /** Valid values are one of: `mine` or `none`. */
  boardStars?: string;
  /**
   * This is a nested resource. Read more about cards as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  cards?: string;

  card?: {
    /** Use with the `cards` param to include card pluginData with the response */
    pluginData?: boolean;
    /**
     * All or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`,
     * `due`, `email`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`,
     * `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`,
     * `subscribed`, `url`
     */
    fields?:
    | 'all'
    | string
    | string[]
    | 'badges'
    | 'checkItemStates'
    | 'closed'
    | 'dateLastActivity'
    | 'desc'
    | 'descData'
    | 'due'
    | 'email'
    | 'idAttachmentCover'
    | 'idBoard'
    | 'idChecklists'
    | 'idLabels'
    | 'idList'
    | 'idMembers'
    | 'idMembersVoted'
    | 'idShort'
    | 'labels'
    | 'manualCoverAttachment'
    | 'name'
    | 'pos'
    | 'shortLink'
    | 'shortUrl'
    | 'subscribed'
    | 'url'
    | (
      | 'badges'
      | 'checkItemStates'
      | 'closed'
      | 'dateLastActivity'
      | 'desc'
      | 'descData'
      | 'due'
      | 'email'
      | 'idAttachmentCover'
      | 'idBoard'
      | 'idChecklists'
      | 'idLabels'
      | 'idList'
      | 'idMembers'
      | 'idMembersVoted'
      | 'idShort'
      | 'labels'
      | 'manualCoverAttachment'
      | 'name'
      | 'pos'
      | 'shortLink'
      | 'shortUrl'
      | 'subscribed'
      | 'url'
    )[];
    /** Whether to include the parent list with card results */
    list?: boolean;
    /** Whether to include member objects with card results */
    members?: boolean;
    /** Whether to include sticker objects with card results */
    stickers?: boolean;
    /**
     * Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card
     * cover attachments.
     */
    attachments?: boolean;
  };

  /**
   * @deprecated Use `card: { pluginData: true }` instead.
   *
   *   Use with the `cards` param to include card pluginData with the response
   */
  cardPluginData?: boolean;
  /**
   * This is a nested resource. Read more about checklists as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  checklists?: string;
  /** This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource). */
  customFields?: boolean;
  /**
   * The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed,
   * dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames,
   * memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url
   */
  fields?: string;
  /**
   * This is a nested resource. Read more about labels as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  labels?: string;
  /**
   * This is a nested resource. Read more about lists as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  lists?: string;
  /**
   * This is a nested resource. Read more about members as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  members?: string;
  /**
   * This is a nested resource. Read more about memberships as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  memberships?: string;
  /** Determines whether the pluginData for this board should be returned. Valid values: true or false. */
  pluginData?: boolean;
  /**
   * This is a nested resource. Read more about organizations as nested resources
   * [here](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/).
   */
  organization?: boolean;
  /** Use with the `organization` param to include organization pluginData with the response */
  organizationPluginData?: boolean;
  myPrefs?: boolean;
  /** Also known as collections, tags, refer to the collection(s) that a Board belongs to. */
  tags?: boolean;
}
