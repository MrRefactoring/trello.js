import { z } from 'zod';

export const GetMemberNotificationChannelSettingsSchema = z.object({
  /** The ID or username of the member */
  id: z.union([z.string(), z.string()]),
});

export type GetMemberNotificationChannelSettings = z.input<typeof GetMemberNotificationChannelSettingsSchema>;
