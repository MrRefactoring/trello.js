import { Actions } from './actions';

export interface GetMemberNotifications extends Actions {
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
  memberCreator?: boolean;
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields?: string;
}
