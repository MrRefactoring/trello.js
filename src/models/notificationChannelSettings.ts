import { z } from 'zod';
import { apiObject } from '#/core';
import { TrelloIDSchema } from '#/models/trelloID';
import { BlockedKeySchema } from '#/models/blockedKey';
import { ChannelSchema } from '#/models/channel';

export const NotificationChannelSettingsSchema = apiObject({
  id: z.string(),
  idMember: TrelloIDSchema.optional(),
  blockedKeys: z.array(BlockedKeySchema).optional(),
  channel: ChannelSchema.optional(),
});

export type NotificationChannelSettings = z.infer<typeof NotificationChannelSettingsSchema>;
