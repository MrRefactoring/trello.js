export interface GetMembersIdNotifications {
  /** The ID or username of the member */
  id: Record<string, any>;
  entities?: boolean;
  display?: boolean;
  filter?: string;
  /** One of: `all`, `read`, `unread` */
  read_filter?: string;
  /** `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) */
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
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  memberCreator_fields?: string;
}
