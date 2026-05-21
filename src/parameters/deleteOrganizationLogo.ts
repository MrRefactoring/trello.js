import { z } from 'zod';

export const DeleteOrganizationLogoSchema = z.object({
  /** The ID or name of the organization */
  id: z.string(),
});

export type DeleteOrganizationLogo = z.input<typeof DeleteOrganizationLogoSchema>;
