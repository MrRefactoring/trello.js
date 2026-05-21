import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationSchema = z.object({
  /** The ID or name of the Organization */
  id: TrelloIDSchema,
});

export type GetOrganization = z.input<typeof GetOrganizationSchema>;
