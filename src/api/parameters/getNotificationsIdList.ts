export interface GetNotificationsIdList {
  /** The ID of the notification */
  id: Record<string, any>;
  /** `all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
