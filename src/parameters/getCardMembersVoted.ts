import { z } from 'zod';

export const GetCardMembersVotedSchema = z.object({
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the Card */
  id: z.unknown(),
});

export type GetCardMembersVoted = z.input<typeof GetCardMembersVotedSchema>;
