import { z } from 'zod';

export const GetCardMembersSchema = z.object({
  /** The ID of the Card */
  id: z.unknown(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  fields: z.union([z.string(), z.array(z.string())]).optional(),
});

export type GetCardMembers = z.input<typeof GetCardMembersSchema>;
