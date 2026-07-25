import { z } from 'zod';

export const DownloadBoardExportSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** The ID of the export */
  idExport: z.string(),
});

export type DownloadBoardExport = z.input<typeof DownloadBoardExportSchema>;
