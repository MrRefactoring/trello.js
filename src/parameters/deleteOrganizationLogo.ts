import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteOrganizationLogoSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type DeleteOrganizationLogo = z.input<typeof DeleteOrganizationLogoSchema>;
