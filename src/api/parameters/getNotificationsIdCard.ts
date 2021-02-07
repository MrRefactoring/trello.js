export interface GetNotificationsIdCard {
  /** The ID of the notification */
  id: Record<string, any>;
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
