import { z } from 'zod';
import { BlockedKeySchema } from '../models';

export const UpdateMemberNotificationChannelSettingsSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
  channel: z.unknown(),
  /** Blocked key or array of blocked keys. */
  blockedKeys: z.union([z.unknown(), z.array(BlockedKeySchema)]),
});

export type UpdateMemberNotificationChannelSettings = z.input<typeof UpdateMemberNotificationChannelSettingsSchema>;
