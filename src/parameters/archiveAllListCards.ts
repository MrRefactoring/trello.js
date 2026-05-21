import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const ArchiveAllListCardsSchema = z.object({
  /** The ID of the list */
  id: TrelloIDSchema,
});

export type ArchiveAllListCards = z.input<typeof ArchiveAllListCardsSchema>;
