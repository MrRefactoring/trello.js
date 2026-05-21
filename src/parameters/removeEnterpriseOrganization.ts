import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveEnterpriseOrganizationSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
  /** ID of the organization to be removed from the enterprise. */
  idOrg: TrelloIDSchema,
});

export type RemoveEnterpriseOrganization = z.input<typeof RemoveEnterpriseOrganizationSchema>;
