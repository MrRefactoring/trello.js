import { z } from 'zod';
import { ChannelSchema } from '../models';
import { BlockedKeySchema } from '../models';

export const UpdateMemberNotificationChannelSettingsSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
  channel: ChannelSchema,
  /** Blocked key or array of blocked keys. */
  blockedKeys: z.union([BlockedKeySchema, z.array(BlockedKeySchema)]),
});

export type UpdateMemberNotificationChannelSettings = z.input<typeof UpdateMemberNotificationChannelSettingsSchema>;
