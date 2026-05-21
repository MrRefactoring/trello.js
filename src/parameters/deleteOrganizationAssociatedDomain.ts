import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteOrganizationAssociatedDomainSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
});

export type DeleteOrganizationAssociatedDomain = z.input<typeof DeleteOrganizationAssociatedDomainSchema>;
