export interface GetMemberNotifications {
  /** The ID or username of the member */
  id: string;
  entities?: boolean;
  display?: boolean;
  filter?: string;
  /** One of: `all`, `read`, `unread` */
  readFilter?: string;
  /**
   * `all` or a comma-separated list of notification
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields?: string;
  /** Max 1000 */
  limit?: number;
  /** Max 100 */
  page?: number;
  /** A notification ID */
  before?: string;
  /** A notification ID */
  since?: string;
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields?: string;
}
