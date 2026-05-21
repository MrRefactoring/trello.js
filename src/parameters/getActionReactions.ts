import { z } from 'zod';
import { TrelloIDSchema } from '../models';

export const GetActionReactionsSchema = z.object({
  /**
   * Whether to load the member as a nested resource. See [Members Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
   */
  member: z.boolean().optional(),
  /** Whether to load the emoji as a nested resource. */
  emoji: z.boolean().optional(),
  /** The ID of the action */
  idAction: TrelloIDSchema,
});

export type GetActionReactions = z.input<typeof GetActionReactionsSchema>;
