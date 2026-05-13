import { z } from 'zod';

export const GetOrganizationPluginDataSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
});

export type GetOrganizationPluginData = z.input<typeof GetOrganizationPluginDataSchema>;
