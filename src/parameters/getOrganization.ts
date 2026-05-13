import { z } from 'zod';

export const GetOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: z.unknown(),
});

export type GetOrganization = z.input<typeof GetOrganizationSchema>;
