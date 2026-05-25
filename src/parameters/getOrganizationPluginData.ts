import { z } from 'zod';

export const GetOrganizationPluginDataSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
});

export type GetOrganizationPluginData = z.input<typeof GetOrganizationPluginDataSchema>;
