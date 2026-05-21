import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { ChannelSchema } from '../models';

export const GetMemberNotificationChannelSettingSchema = z.object({
  /** The ID or username of the member */
  id: z.union([TrelloIDSchema, z.string()]),
  /** Channel to block notifications on */
  channel: ChannelSchema,
});

export type GetMemberNotificationChannelSetting = z.input<typeof GetMemberNotificationChannelSettingSchema>;
