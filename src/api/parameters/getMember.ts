export interface GetMember {
  /** The ID or username of the member */
  id: string;
  /** See the [Actions Nested Resource](ref:actions-nested-resource) */
  actions?: string;
  /** See the [Boards Nested Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/idboardsopen) */
  boards?: string;
  /** One of: `all`, `custom`, `default`, `none`, `premium` */
  boardBackgrounds?: string;
  /** `all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned */
  boardsInvited?: string;
  /** `all` or a comma-separated list of board [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  boardsInvitedFields?: string[];
  /** Whether to return the boardStars or not */
  boardStars?: boolean;
  /** See the [Cards Nested Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) for additional options */
  cards?: string;
  /** `all` or `none` */
  customBoardBackgrounds?: string;
  /** `all` or `none` */
  customEmoji?: string;
  /** `all` or `none` */
  customStickers?: string;
  /** `all` or a comma-separated list of member [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: 'all' | string[];
  /** See the [Notifications Nested Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/idnotificationsall) */
  notifications?: string;
  /** One of: `all`, `members`, `none`, `public` */
  organizations?: string;

  organization?: {
    /** `all` or a comma-separated list of organization [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
    fields?: 'all' | string[];
    paidAccount?: boolean;
  };

  /**
   * @deprecated Use `organization.fields`.
   *
   * `all` or a comma-separated list of organization [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields?: 'all' | string[];

  /**
   * @deprecated Use `organization.paidAccount`.
   */
  organizationPaidAccount?: boolean;

  /** One of: `all`, `members`, `none`, `public` */
  organizationsInvited?: string;
  /** `all` or a comma-separated list of organization [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  organizationsInvitedFields?: 'all' | string[];
  paidAccount?: boolean;
  savedSearches?: boolean;
  /** `all` or `none` */
  tokens?: 'all' | 'none';
}
