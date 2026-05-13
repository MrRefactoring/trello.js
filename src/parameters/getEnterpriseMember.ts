import { z } from 'zod';

export const GetEnterpriseMemberSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /** An ID of a member resource. */
  idMember: z.unknown(),
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields: z.string().optional(),
  /**
   * Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/)
   * accepts.
   */
  organizationFields: z.string().optional(),
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  boardFields: z.string().optional(),
});

export type GetEnterpriseMember = z.input<typeof GetEnterpriseMemberSchema>;
