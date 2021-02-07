export interface PutNotificationsId {
  /** The ID of the notification */
  id: Record<string, any>;
  /** Whether the notification should be marked as read or not */
  unread?: boolean;
}
