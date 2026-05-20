import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const MarkAllNotificationsReadSchema = z.object({
  /** Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read) */
  read: z.boolean().optional(),
  /**
   * A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This
   * will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in
   * the group as read/unread.
   */
  ids: z.array(TrelloIDSchema).optional(),
});

export type MarkAllNotificationsRead = z.input<typeof MarkAllNotificationsReadSchema>;
