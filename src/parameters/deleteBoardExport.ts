import { z } from 'zod';

export const DeleteBoardExportSchema = z.object({
  /** The ID of the board */
  id: z.string(),
  /** The ID of the export */
  idExport: z.string(),
});

export type DeleteBoardExport = z.input<typeof DeleteBoardExportSchema>;
