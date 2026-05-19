import { z } from 'zod';

export const GetMemberTokensSchema = z.object({
  /** The ID or username of the member */
  id: z.unknown(),
  /** Whether to include webhooks */
  webhooks: z.boolean().optional(),
});

export type GetMemberTokens = z.input<typeof GetMemberTokensSchema>;
