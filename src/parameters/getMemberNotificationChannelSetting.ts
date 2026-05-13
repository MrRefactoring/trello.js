import { z } from 'zod';

export const GetMemberNotificationChannelSettingSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.unknown(), z.string()]),
  /** Channel to block notifications on */
  channel: z.unknown(),
});

export type GetMemberNotificationChannelSetting = z.input<typeof GetMemberNotificationChannelSettingSchema>;
