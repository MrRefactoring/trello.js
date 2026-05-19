import { z } from 'zod';

export const DeactivateEnterpriseMemberSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: z.unknown(),
  /** ID of the Member to deactive. */
  idMember: z.unknown(),
  /** Determines whether the user is deactivated or not. */
  value: z.boolean(),
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields: z.unknown().optional(),
  /** Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  organizationFields: z.unknown().optional(),
  /** Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts. */
  boardFields: z.unknown().optional(),
});

export type DeactivateEnterpriseMember = z.input<typeof DeactivateEnterpriseMemberSchema>;
