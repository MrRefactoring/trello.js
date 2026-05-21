import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetMemberTokensSchema = z.object({
  /** The ID or username of the member */
  id: TrelloIDSchema,
  /** Whether to include webhooks */
  webhooks: z.boolean().optional(),
});

export type GetMemberTokens = z.input<typeof GetMemberTokensSchema>;
