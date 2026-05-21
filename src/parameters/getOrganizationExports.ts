import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetOrganizationExportsSchema = z.object({
  /** The ID or name of the Workspace */
  id: TrelloIDSchema,
});

export type GetOrganizationExports = z.input<typeof GetOrganizationExportsSchema>;
