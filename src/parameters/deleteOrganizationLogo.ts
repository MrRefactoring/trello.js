import { z } from 'zod';

export const DeleteOrganizationLogoSchema = z.object({
  /** The ID or name of the organization */
  id: z.unknown(),
});

export type DeleteOrganizationLogo = z.input<typeof DeleteOrganizationLogoSchema>;
