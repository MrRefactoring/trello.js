export interface PutNotificationsId {
  /** The API key to use */
  key: Record<string, any>;
  /** The API token to use */
  token: Record<string, any>;
  /** The ID of the notification */
  id: Record<string, any>;
  /** Whether the notification should be marked as read or not */
  unread?: boolean;
}
