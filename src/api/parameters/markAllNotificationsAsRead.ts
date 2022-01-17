import { TrelloID } from '../models';

export interface MarkAllNotificationsAsRead {
  /** Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read) */
  read?: boolean;
  /**
   * A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This
   * will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in
   * the group as read/unread.
   */
  ids?: TrelloID[];
}
