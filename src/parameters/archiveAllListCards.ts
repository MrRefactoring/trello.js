import { z } from 'zod';

export const ArchiveAllListCardsSchema = z.object({
  /** The ID of the list */
  id: z.string(),
});

export type ArchiveAllListCards = z.input<typeof ArchiveAllListCardsSchema>;
