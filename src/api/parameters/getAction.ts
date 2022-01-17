export interface GetAction {
  /** The ID of the Action */
  id: string;
  display?: boolean;
  entities?: boolean;
  /**
   * `all` or a comma-separated list of action
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#action-object)
   */
  fields?: 'all' | string[];
  member?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberFields?: 'all' | string[];
  /** Whether to include the member object for the creator of the action */
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields?: 'all' | string[];
}
