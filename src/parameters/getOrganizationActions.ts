import { z } from 'zod';
import { TrelloIDSchema } from '../models';
import { ActionSchema } from '../models';

export const GetOrganizationActionsSchema = z.object({
  /** The ID or name of the organization */
  id: TrelloIDSchema,
  /**
   * The fields to be returned for the Actions. [See Action fields
   * here](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#action-object).
   */
  fields: ActionSchema.optional(),
  /**
   * A comma-separated list of [action
   * types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).
   */
  filter: z.union([z.string(), z.array(z.string())]).optional(),
  /** The format of the returned Actions. Either list or count. */
  format: z.string().optional(),
  /** A comma-separated list of idModels. Only actions related to these models will be returned. */
  idModels: z.union([z.string(), z.array(z.string())]).optional(),
  /** The limit of the number of responses, between 0 and 1000. */
  limit: z.number().optional(),
  /** Whether to return the member object for each action. */
  member: z.boolean().optional(),
  /**
   * The fields of the
   * [member](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#member-object) to
   * return.
   */
  memberFields: z.string().optional(),
  /** Whether to return the memberCreator object for each action. */
  memberCreator: z.boolean().optional(),
  /**
   * The fields of the
   * [member](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to
   * return
   */
  memberCreatorFields: z.string().optional(),
  /** The page of results for actions. */
  page: z.number().optional(),
  /** Whether to show reactions on comments or not. */
  reactions: z.boolean().optional(),
  /**
   * A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will
   * be returned.
   */
  before: z.string().optional(),
  /**
   * A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will
   * be returned.
   */
  since: z.string().optional(),
});

export type GetOrganizationActions = z.input<typeof GetOrganizationActionsSchema>;
