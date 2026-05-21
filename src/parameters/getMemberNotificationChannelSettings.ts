import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberNotificationChannelSettingsSchema = z.object({
  /** The ID or username of the member */
  id: z.union([TrelloIDSchema, z.string()]),
});

export type GetMemberNotificationChannelSettings = z.input<typeof GetMemberNotificationChannelSettingsSchema>;
