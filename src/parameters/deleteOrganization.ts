import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DeleteOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: TrelloIDSchema,
});

export type DeleteOrganization = z.input<typeof DeleteOrganizationSchema>;
