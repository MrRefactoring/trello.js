import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const CreateOrganizationExportSchema = z.object({
  /** Whether the CSV should include attachments or not. */
  attachments: z.boolean().optional(),
  /** The ID or name of the Workspace */
  id: TrelloIDSchema,
});

export type CreateOrganizationExport = z.input<typeof CreateOrganizationExportSchema>;
