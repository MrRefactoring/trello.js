import { z } from 'zod';
import { apiObject } from '#/core';
import { BlockedKeySchema } from '#/models/blockedKey';
import { ChannelSchema } from '#/models/channel';

export const NotificationChannelSettingsSchema = apiObject({
  id: z.string(),
  idMember: z.string().optional(),
  blockedKeys: z.array(BlockedKeySchema).optional(),
  channel: ChannelSchema.optional(),
});

export type NotificationChannelSettings = z.infer<typeof NotificationChannelSettingsSchema>;
