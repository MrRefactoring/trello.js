import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const AddEnterpriseOrganizationSchema = z.object({
  /** ID of the Enterprise to retrieve. */
  id: TrelloIDSchema,
  /** ID of Organization to be transferred to Enterprise. */
  idOrganization: z.string(),
});

export type AddEnterpriseOrganization = z.input<typeof AddEnterpriseOrganizationSchema>;
