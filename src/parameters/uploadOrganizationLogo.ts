import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const UploadOrganizationLogoSchema = z.object({
  /** The ID or name of the Workspace */
  id: TrelloIDSchema,
  /** Image file for the logo */
  file: z.string().optional(),
});

export type UploadOrganizationLogo = z.input<typeof UploadOrganizationLogoSchema>;
