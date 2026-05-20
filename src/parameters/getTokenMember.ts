import { z } from 'zod';

export const GetTokenMemberSchema = z.object({
  token: z.string(),
  /**
   * `all` or a comma-separated list of valid fields for [Member
   * Object](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/).
   */
  fields: z.unknown().optional(),
});

export type GetTokenMember = z.input<typeof GetTokenMemberSchema>;
