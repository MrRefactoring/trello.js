import { z } from 'zod';

export const GetOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: z.string(),
});

export type GetOrganization = z.input<typeof GetOrganizationSchema>;
