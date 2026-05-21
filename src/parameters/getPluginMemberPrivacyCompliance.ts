import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetPluginMemberPrivacyComplianceSchema = z.object({
  /** The ID of the Power-Up */
  id: TrelloIDSchema,
});

export type GetPluginMemberPrivacyCompliance = z.input<typeof GetPluginMemberPrivacyComplianceSchema>;
