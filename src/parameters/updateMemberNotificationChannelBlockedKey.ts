import { z } from 'zod';
import { ChannelSchema } from '../models';

export const UpdateMemberNotificationChannelBlockedKeySchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /** Channel to block notifications on */
  channel: ChannelSchema,
  /** Singular key or comma-separated list of notification keys */
  blockedKeys: z.union([
    z.string(),
    z.enum([
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
    ]),
  ]),
});

export type UpdateMemberNotificationChannelBlockedKey = z.input<typeof UpdateMemberNotificationChannelBlockedKeySchema>;
