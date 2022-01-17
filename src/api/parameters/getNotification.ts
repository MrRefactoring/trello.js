export interface GetNotification {
  /** The ID of the notification */
  id: string;
  /** Whether to include the board object */
  board?: boolean;
  /**
   * `all` or a comma-separated list of board
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  boardFields?: 'all' | string;
  /** Whether to include the card object */
  card?: boolean;
  /**
   * `all` or a comma-separated list of card
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  cardFields?: 'all' | string[];
  /** Whether to include the display object with the results */
  display?: boolean;
  /** Whether to include the entities object with the results */
  entities?: boolean;
  /**
   * `all` or a comma-separated list of notification
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: 'all' | string[];
  /** Whether to include the list object */
  list?: boolean;
  /** Whether to include the member object */
  member?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberFields?: 'all' | string[];
  /** Whether to include the member object of the creator */
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields?: 'all' | string[];
  /** Whether to include the organization object */
  organization?: boolean;
  /**
   * `all` or a comma-separated list of organization
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  organizationFields?: 'all' | string[];
}
