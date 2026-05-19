import { z } from 'zod';

export const GetNotificationSchema = z.object({
  /** The ID of the notification */
  id: z.unknown(),
  /** Whether to include the board object */
  board: z.boolean().optional(),
  /** `all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  boardFields: z.unknown().optional(),
  /** Whether to include the card object */
  card: z.boolean().optional(),
  /** `all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  cardFields: z.unknown().optional(),
  /** Whether to include the display object with the results */
  display: z.boolean().optional(),
  /** Whether to include the entities object with the results */
  entities: z.boolean().optional(),
  /** `all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  fields: z.unknown().optional(),
  /** Whether to include the list object */
  list: z.boolean().optional(),
  /** Whether to include the member object */
  member: z.boolean().optional(),
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  memberFields: z.unknown().optional(),
  /** Whether to include the member object of the creator */
  memberCreator: z.boolean().optional(),
  /** `all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  memberCreatorFields: z.unknown().optional(),
  /** Whether to include the organization object */
  organization: z.boolean().optional(),
  /** `all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/) */
  organizationFields: z.unknown().optional(),
});

export type GetNotification = z.input<typeof GetNotificationSchema>;
