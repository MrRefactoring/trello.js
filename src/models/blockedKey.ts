import { z } from 'zod';

export const BlockedKeySchema = z.enum([
  'notification_comment_card',
  'notification_added_a_due_date',
  'notification_changed_due_date',
  'notification_card_due_soon',
  'notification_removed_from_card',
  'notification_added_attachment_to_card',
  'notification_created_card',
  'notification_moved_card',
  'notification_archived_card',
  'notification_unarchived_card',
]);

export type BlockedKey = z.infer<typeof BlockedKeySchema>;
