import { z } from 'zod';

export const DeleteOrganizationAssociatedDomainSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
});

export type DeleteOrganizationAssociatedDomain = z.input<typeof DeleteOrganizationAssociatedDomainSchema>;
