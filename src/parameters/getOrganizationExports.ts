import { z } from 'zod';

export const GetOrganizationExportsSchema = z.object({
  /** The ID or name of the Workspace */
  id: z.unknown(),
});

export type GetOrganizationExports = z.input<typeof GetOrganizationExportsSchema>;
