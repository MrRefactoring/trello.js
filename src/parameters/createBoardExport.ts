import { z } from 'zod';

export const CreateBoardExportSchema = z.object({
  /** Whether the export should include attachments */
  attachments: z.boolean().optional(),
  /** Only include attachments created within this many days. `0` means no limit. */
  attachmentAge: z.number().optional(),
  /** The ID of the board */
  id: z.string(),
});

export type CreateBoardExport = z.input<typeof CreateBoardExportSchema>;
