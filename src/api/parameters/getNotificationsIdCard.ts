export interface GetNotificationsIdCard {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the notification */
  id: Record<string, any>;
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
