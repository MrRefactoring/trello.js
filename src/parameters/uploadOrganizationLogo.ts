import { z } from 'zod';

export const UploadOrganizationLogoSchema = z.object({
  /** The ID or name of the Workspace */
  id: z.string(),
  /** Image file for the logo */
  file: z.string().optional(),
});

export type UploadOrganizationLogo = z.input<typeof UploadOrganizationLogoSchema>;
