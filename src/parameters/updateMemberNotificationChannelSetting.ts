import { z } from 'zod';
import { ChannelSchema } from '../models';
import { BlockedKeySchema } from '../models';

export const UpdateMemberNotificationChannelSettingSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  /** Channel to block notifications on */
  channel: ChannelSchema,
  /** Singular key or array of notification keys */
  blockedKeys: z.union([BlockedKeySchema, z.array(BlockedKeySchema)]),
});

export type UpdateMemberNotificationChannelSetting = z.input<typeof UpdateMemberNotificationChannelSettingSchema>;
