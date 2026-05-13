import { z } from 'zod';

export const UpdateMemberNotificationChannelBlockedKeySchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
  /** Channel to block notifications on */
  channel: z.unknown(),
  /** Singular key or comma-separated list of notification keys */
  blockedKeys: z.unknown(),
});

export type UpdateMemberNotificationChannelBlockedKey = z.input<typeof UpdateMemberNotificationChannelBlockedKeySchema>;
