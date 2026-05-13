import { z } from 'zod';

export const DeleteOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: z.unknown(),
});

export type DeleteOrganization = z.input<typeof DeleteOrganizationSchema>;
