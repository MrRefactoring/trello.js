import { z } from 'zod';

export const VoteOnCardSchema = z.object({
  /** The ID of the member to vote 'yes' on the card */
  value: z.string(),
  /** The ID of the Card */
  id: z.string(),
});

export type VoteOnCard = z.input<typeof VoteOnCardSchema>;
