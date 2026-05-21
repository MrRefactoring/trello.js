import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const RemoveCardChecklistSchema = z.object({
  /** The ID of the Card */
  id: TrelloIDSchema,
  /** The ID of the checklist to delete */
  idChecklist: TrelloIDSchema,
});

export type RemoveCardChecklist = z.input<typeof RemoveCardChecklistSchema>;
