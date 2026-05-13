import { z } from 'zod';

export const GetActionReactionsSchema = z.object({
  /**
   * Whether to load the member as a nested resource. See [Members Nested
   * Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
   */
  member: z.boolean().optional(),
  /** Whether to load the emoji as a nested resource. */
  emoji: z.boolean().optional(),
  /** The ID of the action */
  idAction: z.unknown(),
});

export type GetActionReactions = z.input<typeof GetActionReactionsSchema>;
