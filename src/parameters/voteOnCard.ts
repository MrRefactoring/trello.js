import { z } from 'zod';

export const VoteOnCardSchema = z.object({
  /** The ID of the member to vote 'yes' on the card */
  value: z.unknown(),
  /** The ID of the Card */
  id: z.unknown(),
});

export type VoteOnCard = z.input<typeof VoteOnCardSchema>;
