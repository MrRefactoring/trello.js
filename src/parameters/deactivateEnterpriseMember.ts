import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { MemberFieldsSchema } from '../models';

export const DeactivateEnterpriseMemberSchema = z.object({
  /** ID of the enterprise to retrieve. */
  id: TrelloIDSchema,
  /** ID of the Member to deactive. */
  idMember: TrelloIDSchema,
  /** Determines whether the user is deactivated or not. */
  value: z.boolean(),
  /** A comma separated list of any valid values that the [nested member field resource]() accepts. */
  fields: MemberFieldsSchema.optional(),
  /**
   * Any valid value that the [nested organization
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  organizationFields: z
    .union([z.string(), z.array(z.string()), z.enum(['id', 'name']), z.array(z.enum(['id', 'name']))])
    .optional(),
  /**
   * Any valid value that the [nested board
   * resource](https://developer.atlassian.com/cloud/trello/guides/rest-api/nested-resources/) accepts.
   */
  boardFields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum([
        'id',
        'name',
        'desc',
        'descData',
        'closed',
        'idMemberCreator',
        'idOrganization',
        'pinned',
        'url',
        'shortUrl',
        'prefs',
        'labelNames',
        'starred',
        'limits',
        'memberships',
        'enterpriseOwned',
      ]),
      z.array(
        z.enum([
          'id',
          'name',
          'desc',
          'descData',
          'closed',
          'idMemberCreator',
          'idOrganization',
          'pinned',
          'url',
          'shortUrl',
          'prefs',
          'labelNames',
          'starred',
          'limits',
          'memberships',
          'enterpriseOwned',
        ]),
      ),
    ])
    .optional(),
});

export type DeactivateEnterpriseMember = z.input<typeof DeactivateEnterpriseMemberSchema>;
