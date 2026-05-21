import { z } from 'zod';

export const CreateOrganizationExportSchema = z.object({
  /** Whether the CSV should include attachments or not. */
  attachments: z.boolean().optional(),
  /** The ID or name of the Workspace */
  id: z.string(),
});

export type CreateOrganizationExport = z.input<typeof CreateOrganizationExportSchema>;
