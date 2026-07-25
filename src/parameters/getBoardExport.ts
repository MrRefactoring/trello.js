import { z } from 'zod';

export const GetBoardExportSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** The ID of the export */
  idExport: z.string(),
});

export type GetBoardExport = z.input<typeof GetBoardExportSchema>;
