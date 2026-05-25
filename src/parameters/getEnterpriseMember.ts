import { z } from 'zod';

export const GetEnterpriseMemberSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.string(),
  /** An ID of a member resource. */
  idMember: z.string(),
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields: z.string().optional(),
  /**
   * Any valid value that the [nested organization field
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organizationFields: z.string().optional(),
  /**
   * Any valid value that the [nested board
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  boardFields: z.string().optional(),
});

export type GetEnterpriseMember = z.input<typeof GetEnterpriseMemberSchema>;
