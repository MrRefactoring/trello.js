import { z } from 'zod';

export const GetActionSchema = z.object({
  display: z.boolean().optional(),
  entities: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of action
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#action-object)
   */
  fields: z
    .union([
      z.string(),
      z.array(z.string()),
      z.enum(['id', 'idMemberCreator', 'data', 'type', 'date', 'limits', 'display', 'memberCreator']),
      z.array(z.enum(['id', 'idMemberCreator', 'data', 'type', 'date', 'limits', 'display', 'memberCreator'])),
    ])
    .optional(),
  member: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** Whether to include the member object for the creator of the action */
  memberCreator: z.boolean().optional(),
  /**
   * `all` or a comma-separated list of member
   * [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/)
   */
  memberCreatorFields: z.union([z.string(), z.array(z.string())]).optional(),
  /** The ID of the Action */
  id: z.string(),
});

export type GetAction = z.input<typeof GetActionSchema>;
