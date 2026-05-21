import { z } from 'zod';

export const DeleteOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: z.string(),
});

export type DeleteOrganization = z.input<typeof DeleteOrganizationSchema>;
