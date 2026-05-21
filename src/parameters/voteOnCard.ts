import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const VoteOnCardSchema = z.object({
  /** The ID of the member to vote 'yes' on the card */
  value: TrelloIDSchema,
  /** The ID of the Card */
  id: TrelloIDSchema,
});

export type VoteOnCard = z.input<typeof VoteOnCardSchema>;
