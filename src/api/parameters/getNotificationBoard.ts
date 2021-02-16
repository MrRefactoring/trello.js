export interface GetNotificationBoard {
  /** The ID of the notification */
  id: Record<string, any>;
  /** `all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: Record<string, any>;
}
