import { z } from 'zod';
import { BlockedKeySchema } from '../models';

export const UpdateMemberNotificationChannelSettingSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
  /** Channel to block notifications on */
  channel: z.unknown(),
  /** Singular key or array of notification keys */
  blockedKeys: z.union([z.unknown(), z.array(BlockedKeySchema)]),
});

export type UpdateMemberNotificationChannelSetting = z.input<typeof UpdateMemberNotificationChannelSettingSchema>;
