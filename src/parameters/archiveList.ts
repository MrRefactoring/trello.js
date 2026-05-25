import { z } from 'zod';

export const ArchiveListSchema = z.object({
  /** The ID of the list */
  id: z.string(),
  /** Set to true to close (archive) the list */
  value: z.string().optional(),
});

export type ArchiveList = z.input<typeof ArchiveListSchema>;
