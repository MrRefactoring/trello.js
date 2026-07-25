import { z } from 'zod';

export const GetBoardMostRecentExportSchema = z.object({
  /** The ID of the board */
  id: z.string(),
});

export type GetBoardMostRecentExport = z.input<typeof GetBoardMostRecentExportSchema>;
