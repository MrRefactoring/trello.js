import { z } from 'zod';

export const GetActionReactionSchema = z.object({
  /**
   * Whether to load the member as a nested resource. See [Members Nested
   * Resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)
   */
  member: z.boolean().optional(),
  /** Whether to load the emoji as a nested resource. */
  emoji: z.boolean().optional(),
  /** The ID of the Action */
  idAction: z.unknown(),
  /** The ID of the reaction */
  id: z.unknown(),
});

export type GetActionReaction = z.input<typeof GetActionReactionSchema>;
