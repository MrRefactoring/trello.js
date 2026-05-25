import { z } from 'zod';

export const GetPluginMemberPrivacyComplianceSchema = z.object({
  /** The ID of the Power-Up */
  id: z.string(),
});

export type GetPluginMemberPrivacyCompliance = z.input<typeof GetPluginMemberPrivacyComplianceSchema>;
