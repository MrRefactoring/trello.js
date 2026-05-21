import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const DismissMemberOneTimeMessageSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** The message to dismiss */
  value: TrelloIDSchema,
});

export type DismissMemberOneTimeMessage = z.input<typeof DismissMemberOneTimeMessageSchema>;
