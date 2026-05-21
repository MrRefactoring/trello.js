import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const ArchiveListSchema = z.object({
  /** The ID of the list */
  id: TrelloIDSchema,
  /** Set to true to close (archive) the list */
  value: TrelloIDSchema.optional(),
});

export type ArchiveList = z.input<typeof ArchiveListSchema>;
